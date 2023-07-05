const express = require('express');
const router = express.Router();
const passport = require('passport');

const habitsController = require('../controllers/week_controller');

router.get('/show-weekly',passport.checkAuthentication,habitsController.weekhome);



module.exports = router;