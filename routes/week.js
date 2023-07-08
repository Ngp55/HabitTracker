const express = require('express');
const router = express.Router();
const passport = require('passport');

const habitsController = require('../controllers/week_controller');

router.get('/show-weekly',passport.checkAuthentication,habitsController.showWeeklyHabits);



router.get('/next-week', (req, res) => {
    const queryDate = req.query.date ? new Date(req.query.date) : new Date();
    const nextWeekStartDate = new Date(queryDate.setDate(queryDate.getDate() + 7));
    const nextWeekStartDateString = nextWeekStartDate.toISOString().split('T')[0];
  
    res.redirect(`/show-weekly?date=${nextWeekStartDateString}`);
  });
  router.get('/previous-week', (req, res) => {
    const queryDate = req.query.date ? new Date(req.query.date) : new Date();
    const previousWeekStartDate = new Date(queryDate.setDate(queryDate.getDate() - 7));
    const previousWeekStartDateString = previousWeekStartDate.toISOString().split('T')[0];
  
    res.redirect(`/show-weekly?date=${previousWeekStartDateString}`);
  });

module.exports = router;