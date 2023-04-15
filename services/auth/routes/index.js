const express = require('express');
const router = express.Router();
const controller = require('../controller/index');
const {AuthorizationMiddleware} = require('../../../lib/authMiddleWare');

router.get('/getRole',controller.getRole);
router.post('/login',controller.authenticateUser);
router.post('/register',controller.registerUser);

router.get('/getProfile',AuthorizationMiddleware,controller.getProfile);
router.get('/editProfile',AuthorizationMiddleware,controller.updateProfile);


module.exports = router