const express = require('express');

const controller = require('../controllers/control');

const router = express.Router();

// the main route reference to the controller file  
router.get('/',controller.mainroute);

module.exports=router;