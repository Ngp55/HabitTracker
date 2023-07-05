// const Habit = require('../models/habit');
// const User = require('../models/user');
// const moment = require('moment');

// module.exports.weekhome = async function(req, res) {
//   try {
//     const endDate = moment().endOf('day');
//     const startDate = moment().subtract(7, 'days').startOf('day');

//     // Fetch habits and users data
//     let habits = await Habit.find({ date: { $gte: startDate, $lt: endDate } }, 'name goal time frequency date');
//     let users = await User.find({});

//     return res.render('weekly', {
//       title: "Weekly Data",
//       habits: habits,
//       users: users
//     });
//   } catch (err) {
//     console.log('Error', err);
//     return;
//   }
// };
const Habit = require('../models/habit');

module.exports.weekhome = async (req, res) => {
  try {
    const currentDate = new Date();
    const habits = await Habit.find({
      sdate: { $lte: currentDate },
      edate: { $gte: currentDate },
    });

    res.render('weekly', { 
      title:"weekly",
      habits });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};
