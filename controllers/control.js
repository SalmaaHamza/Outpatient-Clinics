const path = require('path')
const DirName=require('../util/path');

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
    console.log("table here");
    const Id = req.params.id;
    res.sendFile(path.join(DirName,'views','home/table.html'));
  
}

exports.patientEdit=(req,res,next) => {
    
    const Id = req.params.id;
    res.sendFile(path.join(DirName,'views','home/user.html'));
  
}