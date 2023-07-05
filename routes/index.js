const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');




router.get('/', homeController.home);

router.use('/habits', require('./habits'));
router.use('/users', require('./users'));
router.use('/week', require('./week'));
// router.use('/habits', require('./habits'));

console.log('Index router loaded');




// // module.exports = router;
// const router = require("express").Router();
// const {
//    home,
//    add,
//    showHabit,
//    takeAction,
//    habitDelete,
// } = require("../controllers/habit_controller");
// // const router = express.Router();
// const passport = require('passport');
// router.use('/users', require('./users'));

// // For rendering different pages and controllers
// // home page route
// router.get("/", home);

// // adding the habit route
// router.post("/create-habits", add);

// // deleting the habit route
// router.get("/delete/:id", habitDelete);

// // show the habit route
// router.get("/view/:id", showHabit);

// // actions taken by the user
// router.post("/active/:id", takeAction);

module.exports = router;
