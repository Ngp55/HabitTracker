const express = require('express');
const router = express.Router();
const passport = require('passport');

const habitsController = require('../controllers/week_controller');

router.get('/show-weekly',passport.checkAuthentication,habitsController.showWeeklyHabits);

router.get('/show-weeklypre',passport.checkAuthentication,habitsController.goToPreviousWeek);

router.get('/show-weeklynext',passport.checkAuthentication,habitsController.goToNextWeek);



module.exports = router;