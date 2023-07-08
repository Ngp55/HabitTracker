const express = require('express');
const router = express.Router();
const passport = require('passport');

const habitsController = require('../controllers/habit_controller');

router.get('/create-habits',passport.checkAuthentication,habitsController.addHabitPage);
router.post('/create-habitsone',passport.checkAuthentication,habitsController.createHabit);
router.get('/delete-Habit/:id',passport.checkAuthentication,habitsController.deleteHabit);


module.exports = router;