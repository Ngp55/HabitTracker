const mongoose = require('mongoose');

// Define the schema for storing habits entered by user
const habitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    goal: {
        type: String,
        required: true
    },
    sdate: {
        type: Date,
        required: true
    },
    edate: {
        type: Date,
        required: true
    },
    time: {
        type: String
    },
    frequency: {
        type: String,
        enum: ['twice_a_day', 'daily', 'weekly']
    }
    },
    {
    timestamp: true,
    }
);

// Create the Habit model using the schema
const Habit = mongoose.model('Habit', habitSchema);

// Export the model
module.exports = Habit;

// const mongoose = require("mongoose");

// // Schema for habit here

// const habitSchema = new mongoose.Schema(
//    {
//       habit_name: {
//          type: String,
//          required: true,
//       },
//       start: {
//          type: Date,
//          required: true,
//       },
//       end: {
//          type: Date,
//          required: true,
//       },
//       current_Streak: {
//          type: Number,
//          default: 0,
//       },
//       best_Streak: {
//          type: Number,
//          default: 0,
//       },
//       success_Days: {
//          type: Number,
//          default: 0,
//       },
//       totalDaysTillDate: {
//          type: Number,
//          default: 0,
//       },
//       completions: {
//          type: Map,
//       },
//    },
//    {
//       timestamp: true,
//    }
// );

// // model creating here
// const Habit = mongoose.model("Habit", habitSchema);
// module.exports = Habit;
