const path = require('path')
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