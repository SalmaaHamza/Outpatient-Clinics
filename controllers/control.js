const path = require('path')
const DirName=require('../util/path');
const bcrypt = require('bcryptjs')
const patient = require('../models/patient')
const doctor = require('../models/doctor')
const flash = require('req-flash')
// the main route which render the main html page

exports.mainroute=(req,res,next) => {

    res.sendFile(path.join(DirName,'views','home/index.html'));

}


exports.signin=(req,res,next)=>{  
    res.sendFile(path.join(DirName,'views','home/signin.html'));
}


exports.signup=(req,res,next)=>{  
    res.sendFile(path.join(DirName,'views','home/signup.html'));


}


exports.userDoctor=(req,res,next)=>{
    res.sendFile(path.join(DirName,'views','home/userDoctor.hbs'));
}

exports.signupD=(req,res,next)=>{
    res.sendFile(path.join(DirName,'views','home/signup_doctor.html'));
}

exports.signinD=(req,res,next)=>{
    res.sendFile(path.join(DirName,'views','home/signin_doctor.html'));
}

// exports.

exports.post_signupD = (req,res)=>{
   console.log("signUpDoctor");
    const newdoctor = new doctor({
        DSSN : req.body.DSSN,
        Email : req.body.Email,
        Password : req.body.Password,
        FName : req.body.FName,
        LName : req.body.LName,
        Phone: req.body.Phone,
        Dname:req.body.Dname,
        //Username: req.body.Username,
        //Address: req.body.Address
        Description:req.body.Description,
        img:req.body.img

    });


        doctor.findOne({where:{Email: newdoctor.Email}}).then(user => {
           
            if (!user) {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newdoctor.Password, salt, (err, hash) => {
                        newdoctor.Password = hash;
                        newdoctor.save().then(savedUser => {
                            res.redirect('/userD.handlebars');

                           
                        });
                        console.log(hash);
                    });
                });
            } else {
                // req.flash('already_user','The E-mail exists,please login')
                console.log('The E-mail exists,please login');
                
                res.send("please login").status(200);
            }
        });

    
}

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
    
    if (req.body.Password !== req.body.ConfirmPassword) {
        
        res.sendFile(path.join(DirName,'views','errors/signupwrongpass.html'));

    }
        
else{
        patient.findOne({where:{Email: newpatient.Email}}).then(user => {
           
            if (!user) {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newpatient.Password, salt, (err, hash) => {
                        newpatient.Password = hash;
                        newpatient.save().then(savedUser => {
                            //res.sendFile(path.join(DirName,'views','home/user.handlebars'));
                             res.redirect('/patient/'+newpatient.PSSN); 
                        });
                       
                    });
                });
            } else {
               
                
                 res.sendFile(path.join(DirName,'views','errors/signupexistingemail.html'));
            }
        });

    }

}

exports.post_signinP = (req,res,next)=>{
    let User=null;
    let Email = req.body.Email;
    let Password = req.body.Password;
    patient.findOne({where:{Email:Email}}).then(user=>{
       User=user;
        if(!user){

            res.sendFile(path.join(DirName,'views','errors/signinwrongemail.html'));
            console.log('email not found')
       } else{
           bcrypt.compare(Password, user.Password).then((returnedPassword) => {
               if (returnedPassword){
                // res.sendFile(path.join(DirName,'views','home/user.html'));
                res.redirect('/patient/'+User.PSSN);
  
               }
               else{

                res.sendFile(path.join(DirName,'views','errors/signinwrongpass.html'));
               }
           });
       }
    });
}

exports.post_signinD =  (req,res,next)=>{
    let User=null;
    let Email = req.body.Email;
    let Password = req.body.Password;
    doctor.findOne({where:{Email:Email}}).then(user => {
    //    console.log(user)
        if(!user){
            
           
            res.sendFile(path.join(DirName,'views','errors/signinemailerrorD.html'));
           
       } else{
           bcrypt.compare(Password, user.Password).then((returnedPassword) => {
               if (returnedPassword){
                res.sendFile(path.join(DirName,'views','home/userDoctor.html'));
               // res.redirect('/patient/'+User.PSSN);
                
  
               }
               else{
                res.sendFile(path.join(DirName,'views','home/siginwrongpassD.html'));
                  
               }
           });
       }
    });
}

exports.post_signout = (req,res,next)=>{
    // res.sendFile(path.join(DirName,'views','home/index.html'));
    res.redirect('/');
}


