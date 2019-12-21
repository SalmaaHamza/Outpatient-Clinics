
const express = require('express');
const clinics = require('../controllers/clinics');
const router = express.Router();


router.post('/edit/:id',() => {console.log("hereeeeeee")});
router.get('/patient/Home/Neurology',clinics.Neurology);
router.get('/patient/Home/Cardiology',clinics.Cardiology);
router.get('/patient/Home/Nuclear_Magnetic',clinics.Nuclear_Magnetic);
router.get('/patient/Home/Opthalmology',clinics.Opthalmology);
router.get('/patient/Home/Surgical',clinics.Surgical);
router.get('/patient/Home/Traumatology',clinics.Traumatology);
router.post('/patient/Home/appointment',clinics.appoint);


router.get('/patient/Home/:id',clinics.patientHome);
router.get('/patient/table/:id',clinics.patientTable);
router.get('/patient/edit/:id',clinics.patientEdit);
router.get('/patient/:id',clinics.patientId);

module.exports=router;