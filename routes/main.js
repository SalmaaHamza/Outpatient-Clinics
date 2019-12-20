const express = require('express');

const controller = require('../controllers/control');

const router = express.Router();

const User = require('../models/patient')

// the main route reference to the controller file  
router.get('/',controller.mainroute);

router.get('/Registration',(req,res)=>{
    res.render('home/registration');
});

router.get('/login',(req,res)=>{
    res.render('home/login');
});

router.post('/register',(req,res)=>{
    const newUser = new User({
        PSSN : req.body.PSSN,
        Email : req.body.Email,
        Password : req.body.Password,
        FName : req.body.FName,
        LName : req.body.LName,
        Description: req.body.Description,
    })
    if (req.body.password !== req.body.ConfirmPassword) {
        //  req.flash('not_matched_passwords',"passwords don't match");
        console.log("passwords don't match");
        // res.render('home/registration',{
        //     //not_matched_passwords : req.flash('not_matched_passwords'),
        //     firstName : req.body.firstName,
        //     lastName : req.body.lastName,
        //     email : req.body.email,
        // });
        res.send("password dont match").status(200);
    }else {

        User.findOne({email: req.body.email}).then(user => {
            if (!user) {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        newUser.password = hash;
                        newUser.save().then(savedUser => {
                            //  req.flash('success_register','You are now registered,Please login');
                            console.log('success_register', 'You are now registered,Please login');
                            // res.render('home/login', {
                            //     email : req.body.email,
                            //     password : req.body.password,
                            //
                            // });
                            res.send(savedUser).status(200);
                        });
                        console.log(hash);
                    });
                });
            } else {
                // req.flash('already_user','The E-mail exists,please login');
                console.log('The E-mail exists,please login');
                // res.render('home/login',{
                //     email : req.body.email,
                //     password : req.body.password,
                // });
                res.send("please login").status(200);
            }
        });


    }

});

router.post('/login',(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    User.findOne({email:email}).then(user=>{
       if(!user){
           console.log('email not found')
       } else{
           bcrypt.compare(password, user.password).then((returnedPassword) => {
               if (returnedPassword){
                   res.render('home/index');
               }
               else{
                   console.log('the password is not correct');
               }
           });
       }
    });
});

module.exports=router;

