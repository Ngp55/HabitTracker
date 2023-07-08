
const Habit = require('../models/habit');

module.exports.addHabitPage = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 24);
    return res.render('addTask',{
        title: "addHabit | HabitTracker",
        
    });
} 
module.exports.createHabit = async function (req, res) {
    try {
      if (!req.isAuthenticated()) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
  
      const { name, goal, sdate,edate, time, frequency } = req.body;
      const habit = new Habit({
        name,
        goal,
        sdate,
        edate,
        time,
        frequency
      });
      const savedHabit = await habit.save();
      //render the page of addtask
      res.render('addTask',{
        habit: savedHabit,
        title:'CreatingHabits'
      });
      
    } catch (error) {
      res.status(500).json({ error: 'Failed to create habit' });
    }
  };



module.exports.deleteHabit = async function(req, res){
  // try {
  //   if (!req.isAuthenticated()) {
  //     return res.status(401).json({ error: 'Unauthorized' });
  //   }

  //   const { id } = req.params;
  //   console.log('Habit ID:', id); 
  //   const deletedHabit = await Habit.deleteOne({ _id: id }).exec();

  //   if (deletedHabit.deletedCount === 0) {
  //     return res.status(404).json({ error: 'Habit not found' });
  //   }

  //   res.json({ message: 'Habit deleted successfully' });
  // } catch (error) {
  //   res.status(500).json({ error: 'Failed to delete habit' });
  // }
  try {
    if (!req.isAuthenticated()) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    //console.log('Request object:', req); // Log the entire request object for inspection

    const { id } = req.params;
    //console.log('Habit ID:', id); // Log the ID to the console for verification

    const deletedHabit = await Habit.deleteOne({ _id: id }).exec();

    if (deletedHabit.deletedCount === 0) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    res.json({ message: 'Habit deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete habit' });
  }
};
