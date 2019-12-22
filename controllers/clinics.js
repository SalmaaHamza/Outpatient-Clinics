const path = require('path');
const patient = require('../models/patient')
const DirName=require('../util/path');



exports.Neurology= (req,res,next) => {
    res.sendFile(path.join(DirName,'views','home/Neurology.html'));
}

exports.Cardiology= (req,res,next) => {
    res.sendFile(path.join(DirName,'views','home/Cardiology.html'));
}
exports.Nuclear_Magnetic= (req,res,next) => {
    res.sendFile(path.join(DirName,'views','home/Nuclear_Magnetic.html'));
}
exports.Surgical= (req,res,next) => {
    res.sendFile(path.join(DirName,'views','home/Surgical.html'));
}
exports.Traumatology= (req,res,next) => {
    res.sendFile(path.join(DirName,'views','home/Traumatology.html'));
}
exports.Opthalmology= (req,res,next) => {
    res.sendFile(path.join(DirName,'views','home/Opthalmology.html'));
}


exports.appoint= (req,res,next) => {
    res.end()
}


exports.patientId= (req,res,next) => {
      
    const Id = req.params.id;
    res.redirect('/patient/Home/'+Id);

}

exports.patientHome=(req,res,next) => {
    
  const Id = req.params.id;
//   res.sendFile(path.join(DirName,'views','home/dashboard.html'));
res.render('dashboard',{id:Id,layout:false});

}

exports.patientTable=(req,res,next) => {
    const Id = req.params.id;
    res.render('tableP',{id:Id,layout:false});
  
}

exports.patientEdit=(req,res,next) => {
    const Id = req.params.id;
    patient.findOne({where:{PSSN: Id}}).then(patient => {
     res.render('user',{patient:patient,layout:false});
    })
    .catch(err => {
        console.log("editPatientError");
    })
 
}

exports.editData =(req,res,next) => {
    const newpatient = new patient({
        PSSN:req.params.id,
        Email : req.body.Email,
        FName : req.body.FName,
        LName : req.body.LName,
        Phone: req.body.Phone,
        Description: req.body.Description,
        Username: req.body.Username,
        Address: req.body.Address,
        Age   : req.body.age
    });

// console.log(req.body);
patient.findOne({where:{ PSSN:newpatient.PSSN }}).then(patient => {
    newpatient.FName ? patient.FName=newpatient.FName : null;
    newpatient.LName ?  patient.LName=newpatient.LName : null;
    newpatient.Username ?  patient.LName=newpatient.LName : null;
    newpatient.Email ? patient.Email=newpatient.Email : null;
    newpatient.Age ? patient.Age=newpatient.Age : null;
    newpatient.Address ? patient.Address=newpatient.Address : null;
    newpatient.Phone ? patient.Phone=newpatient.Phone : null;
    newpatient.Description ? patient.Description=newpatient.Description : null;
    patient.save();
})
.then( result => {
    console.log(result);
    res.redirect('/patient/edit/'+newpatient.PSSN)
})
.catch(err => console.log("ubdate patient",errr))

}