// Import the Mongoose library
const mongoose = require("mongoose");

// Define the MongoDB server and database name
const server = '127.0.0.1:27017';
const database = 'Checkpoint';


// Define a class named "Database"
class Database {
    constructor() {
        this._connect()
    }

    // Method to establish a connection to the MongoDB database
    _connect() {
        // Use Mongoose to connect to the MongoDB server with the specified server and database
        mongoose.connect(`mongodb://${server}/${database}`)
        .then(() => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.error('Database connection error', err)
        })
    }
}

// Export a new instance of the "Database" class
module.exports = new Database()