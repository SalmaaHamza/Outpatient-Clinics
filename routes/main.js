const express = require('express');
const controller = require('../controllers/control');
const clinics = require('../controllers/clinics');
const path = require('path');
const router = express.Router();

const User = require('../models/patient')

// the main route reference to the controller file  
router.get('/',controller.mainroute);
router.get('/patient/Home/Neurology',clinics.Neurology);
router.get('/patient/Home/Cardiology',clinics.Cardiology);
router.get('/patient/Home/Nuclear_Magnetic',clinics.Nuclear_Magnetic);
router.get('/patient/Home/Opthalmology',clinics.Opthalmology);
router.get('/patient/Home/Surgical',clinics.Surgical);
router.get('/patient/Home/Traumatology',clinics.Traumatology);
router.post('/patient/Home/appointment',clinics.appoint);
router.get('/home/userdoctor',controller.userDoctor)
router.get('/patient/Home/:id',controller.patientHome);
router.get('/patient/table/:id',controller.patientTable);
router.get('/patient/edit/:id',controller.patientEdit);
router.get('/patient/:id',controller.patientId);
router.get('/signin',controller.signin)
router.get('/signup',controller.signup)
router.post('/signin',controller.post_signinP)
router.post('/signin',controller.post_signinD)
router.post('/signup',controller.post_signup)
router.get('/logout',controller.post_signout)





module.exports=router;

