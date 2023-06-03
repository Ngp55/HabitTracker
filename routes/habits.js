const express = require('express');
const router = express.Router();
const passport = require('passport');

const habitsController = require('../controllers/habit_controller');

router.get('/create-habits',passport.checkAuthentication,habitsController.addHabitPage);
router.post('/create-habitsone',passport.checkAuthentication,habitsController.createHabit);

router.get('/get-Habit',passport.authenticate,habitsController.GetHabit);

router.post('/update-Habit',passport.authenticate,habitsController.UpdateHabit);
router.post('/delete-Habit',passport.authenticate,habitsController.deleteHabit);


module.exports = router;