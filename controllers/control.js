const path = require('path')
const DirName=require('../util/path');
const bcrypt = require('bcryptjs')
const patient = require('../models/patient')

// the main route which render the main html page

exports.mainroute=(req,res,next) => {

    res.sendFile(path.join(DirName,'views','home/index.html'));

}


exports.patientId= (req,res,next) => {
      
    const Id = req.params.id;
    res.redirect('/patient/Home/'+Id);

}

exports.patientHome=(req,res,next) => {
    
  const Id = req.params.id;
  res.sendFile(path.join(DirName,'views','home/dashboard.html'));

}

exports.patientTable=(req,res,next) => {
    const Id = req.params.id;
    res.sendFile(path.join(DirName,'views','home/table.html'));
  
}

exports.patientEdit=(req,res,next) => {
    const Id = req.params.id;
    res.sendFile(path.join(DirName,'views','home/user.html'));
  
}
exports.signin=(req,res,next)=>{  
    res.sendFile(path.join(DirName,'views','home/signin.html'));
}
exports.signup=(req,res,next)=>{  
    res.sendFile(path.join(DirName,'views','home/signup.html'));

}
// exports.

exports.post_signup = (req,res)=>{
    const newpatient = new patient({
        PSSN : req.body.PSSN,
        Email : req.body.Email,
        Password : req.body.Password,
        FName : req.body.FName,
        LName : req.body.LName,
        Age:req.body.Age,
        Phone: req.body.Phone,
        Description: req.body.Description,
        Username: req.body.Username,
        Address: req.body.Address
    });

console.log(newpatient)

    
    if (req.body.Password !== req.body.ConfirmPassword) {
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
        

        patient.findOne({where:{Email: newpatient.Email}}).then(user => {
            console.log(user)
            if (!user) {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newpatient.Password, salt, (err, hash) => {
                        newpatient.Password = hash;
                        newpatient.save().then(savedUser => {
                            //  req.flash('success_register','You are now registered,Please login');
                            res.sendFile(path.join(DirName,'views','home/user.html'));
  
                            // res.render('home/login', {
                            //     email : req.body.email,
                            //     password : req.body.password,
                            //
                            // });
                           // res.send(savedUser).status(200);
                        });
                        console.log(hash);
                    });
                });
            } else {
                // req.flash('already_user','The E-mail exists,please login');
                console.log('The E-mail exists,please login');
                
                res.send("please login").status(200);
            }
        });

    }

}

exports.post_signin = (req,res,next)=>{
    let Email = req.body.Email;
    let Password = req.body.Password;
    patient.findOne({where:{Email:Email}}).then(user=>{
       if(!user){
           console.log('email not found')
       } else{
           bcrypt.compare(Password, user.Password).then((returnedPassword) => {
               if (returnedPassword){
                res.sendFile(path.join(DirName,'views','home/user.html'));
  
               }
               else{
                   console.log('the password is not correct');
                   res.send('the password is not correct').status(200)
               }
           });
       }
    });
}
exports.post_signout = (req,res,next)=>{
    res.sendFile(path.join(DirName,'views','home/index.html'));
}

