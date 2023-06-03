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
    date: {
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
});

// Create the Habit model using the schema
const Habit = mongoose.model('Habit', habitSchema);

// Export the model
module.exports = Habit;
