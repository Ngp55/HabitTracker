const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

// router.get('/users', usersController.user);

router.get('/userlist',passport.checkAuthentication,usersController.user);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);


router.post('/create', usersController.create);


router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
),usersController.createSession);
console.log('users router is loaded');


router.get('/sign-out',usersController.destroySession);

module.exports = router;