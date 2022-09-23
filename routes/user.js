
const express= require('express');
const { getAlluser, createUser } = require('../controllers/userController');

// create a router

const router= express.Router();

//user route
router.get('/',getAlluser)
router.post('/',createUser)


module.exports= router;