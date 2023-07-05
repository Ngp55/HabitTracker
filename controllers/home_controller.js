
const Habit = require('../models/habit');
const User = require('../models/user');


module.exports.home = async function(req, res) {

  try{
   
    //let habits = await Habit.find({});
    let habits = await Habit.find({},'name goal');
    let users = await User.find({});

    return res.render('home', {
      title: "HabitTracker | Home",
      habits:  habits,
      users:users
      
    });
  }
  catch(err){
    console.log('ErroR ',err);
    return;
  } 
};