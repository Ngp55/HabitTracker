const User = require('../models/user');
const Habit = require('../models/habit');

module.exports.addHabitPage = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 24);
    return res.render('addTask',{
        title: "HomePage | HabitTracker",
        
    });
} 
module.exports.createHabit = async function (req, res) {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      const { name, goal, date, time, frequency } = req.body;
      const habit = new Habit({
        name,
        goal,
        date,
        time,
        frequency
      });
      const savedHabit = await habit.save();
      //render the page of addtask
      res.render('addTask',{habit: savedHabit,title:'CreatingHabits'});
      
    } catch (error) {
      res.status(500).json({ error: 'Failed to create habit' });
    }
  };


module.exports.GetHabit = async function(req, res ){
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const habits = await Habit.find();
      // res.json(habits);
      res.render('home',{habits});
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve habits' });
    }
  };
  
module.exports.UpdateHabit = async function(req , res ){
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    const { name, goal, date, time, frequency } = req.body;
    const updatedHabit = await Habit.findByIdAndUpdate(
      id,
      { name, goal, date, time, frequency },
      { new: true }
    );
    res.json(updatedHabit);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update habit' });
  }
};

module.exports.deleteHabit = async function(req, res){
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    await Habit.findByIdAndRemove(id);
    res.json({ message: 'Habit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete habit' });
  }
};