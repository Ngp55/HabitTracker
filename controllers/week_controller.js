const Habit = require('../models/habit');
// Utility function to calculate the start date of the week based on a given date
function getWeekStartDate(date) {
  const dayOfWeek = date.getDay(); // Sunday is 0, Monday is 1, and so on...
  const diff = date.getDate() - dayOfWeek;
  return new Date(date.setDate(diff));
}

// Utility function to calculate the end date of the week based on the start date
function getWeekEndDate(weekStartDate) {
  const endDate = new Date(weekStartDate);
  endDate.setDate(endDate.getDate() + 6); // Add 6 days to the start date
  return endDate;
}

// Controller function to display habit data for a specific week
async function showWeeklyHabits(req, res) {
  // const currentDate = new Date(); // Get the current date
  // const queryDate = req.query.date ? new Date(req.query.date) : currentDate; // Use the query parameter if provided, otherwise use the current date
  // const weekStartDate = getWeekStartDate(queryDate); // Get the start date of the week based on the query or current date
  // const weekEndDate = getWeekEndDate(weekStartDate); // Get the end date of the week based on the start date

  // try {
  //   const habits = await Habit.find({ sdate: { $gte: weekStartDate, $lte: weekEndDate } });

  //   res.render('weekly',
    
  //   { 
  //     title:'weekly',
  //     habits, 
  //     weekStartDate, 
  //     weekEndDate
  //    }
  //   );
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send('Internal Server Error');
  // }
  const currentDate = new Date();
  const queryDate = req.query.date ? new Date(req.query.date) : currentDate;
  const weekStartDate = getWeekStartDate(queryDate);
  const weekEndDate = getWeekEndDate(weekStartDate);

  try {
    const habits = await Habit.find({ sdate: { $gte: weekStartDate, $lte: weekEndDate } });

    const formattedStartDate = formatDate(weekStartDate);
    const formattedEndDate = formatDate(weekEndDate);

    res.render('weekly', {
      title: 'Weekly',
      habits,
      weekStartDate: formattedStartDate,
      weekEndDate: formattedEndDate
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }

}
// Utility function to format date as "dd-mm-yyyy"
function formatDate(date) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return date.toLocaleDateString('en-IN', options);
}
// Controller function to navigate to the next week
function goToNextWeek(req, res) {
  const queryDate = req.query.date ? new Date(req.query.date) : new Date(); // Use the query parameter if provided, otherwise use the current date
  const nextWeekStartDate = new Date(queryDate.setDate(queryDate.getDate() + 7)); // Add 7 days to the query or current date
  const nextWeekStartDateString = nextWeekStartDate.toISOString().split('T')[0]; // Convert the date to string format

  res.redirect(`/weekly-habits?date=${nextWeekStartDateString}`);
}

// Controller function to navigate to the previous week
function goToPreviousWeek(req, res) {
  const queryDate = req.query.date ? new Date(req.query.date) : new Date(); // Use the query parameter if provided, otherwise use the current date
  const previousWeekStartDate = new Date(queryDate.setDate(queryDate.getDate() - 7)); // Subtract 7 days from the query or current date
  const previousWeekStartDateString = previousWeekStartDate.toISOString().split('T')[0]; // Convert the date to string format

  res.redirect(`/weekly-habits?date=${previousWeekStartDateString}`);
}

module.exports = {
  showWeeklyHabits,
  goToNextWeek,
  goToPreviousWeek
};
