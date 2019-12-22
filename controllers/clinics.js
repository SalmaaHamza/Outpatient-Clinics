const path = require('path');
const patient = require('../models/patient')
const DirName=require('../util/path');
const doctor =require('../models/doctor');
const appointment =require('../models/appointment');


exports.Neurology= (req,res,next) => {
    const id= req.params.id;
    console.log(id)
    doctor.findAll({where:{Dname:'Neurology'}}).then(result => {
        res.render('clinics',{doctors:result, hasDoctor:result.length>0,id:id ,layout:false});
    });
    
}

exports.Cardiology= (req,res,next) => {
    doctor.findAll({where:{Dname:'Cardiology'}}).then(result => {
        res.render('clinics',{doctors:result, hasDoctor:result.length>0 ,layout:false});
    });
}
exports.Nuclear_Magnetic= (req,res,next) => {
    doctor.findAll({where:{Dname:'Nuclear_Magnetic'}}).then(result => {
        res.render('clinics',{doctors:result, hasDoctor:result.length>0 ,layout:false});
    });
    
}
exports.Surgical= (req,res,next) => {
    doctor.findAll({where:{Dname:'Surgical'}}).then(result => {
        res.render('clinics',{doctors:result, hasDoctor:result.lenght>0 ,layout:false});
    });
}
exports.Traumatology= (req,res,next) => {
    doctor.findAll({where:{Dname:'Traumatology'}}).then(result => {
        res.render('clinics',{doctors:result, hasDoctor:result.length>0 ,layout:false});
    });
    
}
exports.Opthalmology= (req,res,next) => {
    doctor.findAll({where:{Dname:'Opthalmology'}}).then(result => {
        console.log(result[0].Dates);
        
        res.render('clinics',{doctors:result, hasDoctor:result.length>0 ,layout:false});
    });
    
}


exports.appoint= (req,res,next) => {
    let patientId=123548;
    let doctorId=req.body.doctorId;
    let patientData=null;
    let doctorData=null;
    patient.findOne({where:{PSSN:patientId}})
    .then(patient => console.log(patient))
    .catch(err => console.log("apoint",err));
    doctor.findOne({where:{DSSN:doctorId}})
    .then(doctor => console.log(doctor))
    .catch(err => console.log("apoint",err));
    // doctorData.addPatient(patientData,{through:{Date:null}}).then().catch( err => console.log("apoint",err));
// console.log(patientData,doctorData);
res.end();

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