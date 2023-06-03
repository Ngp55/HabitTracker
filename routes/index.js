const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');




router.get('/', homeController.home);

router.use('/habits', require('./habits'));
router.use('/users', require('./users'));
// router.use('/habits', require('./habits'));

console.log('Index router loaded');




module.exports = router;