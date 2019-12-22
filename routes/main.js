const express = require('express');
const controller = require('../controllers/control');
const path = require('path');
const router = express.Router();

const User = require('../models/patient')

// the main route reference to the controller file  


router.get('/home/userdoctor',controller.userDoctor)
router.get('/signin',controller.signin)
router.get('/signinD',controller.signinD)
router.get('/signup',controller.signup)

router.get('/signupD',controller.signupD)
router.post('/signin',controller.post_signinP)
router.post('/signinD',controller.post_signinD)
router.post('/signup',controller.post_signup)
router.get('/logout',controller.post_signout)
router.get('/',controller.mainroute);
router.post('/signupD',controller.post_signupD)


module.exports=router;

