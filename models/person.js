// Import the Mongoose library
const mongoose = require("mongoose");


// Define a Mongoose schema for the "Person" model
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    favoriteFoods: {
        type: [String]
    }
});

// Create and export a Mongoose model named "Person" based on the defined schema
module.exports = mongoose.model("Person",personSchema);