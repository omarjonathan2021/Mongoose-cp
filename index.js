// Import necessary modules and models
let database = require('./database')
let personModel = require('./models/person')


// Create a new person document and save it
let person = new personModel({
    name: 'Omar Jonathan Odinaka', 
    age: 26,
    favoriteFoods: ['Rice','Beans','vegetable soup',]
})

// Save document
person.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })



// Create multiple person documents and save them
personModel
    .create([
        {
            name:'Adio Sherif',
            age:40,
            favoriteFoods:['Rice','Beans', 'gbegiri']
        },
        {
            name:'segun Peter',
            age:89,
            favoriteFoods:['Cake','Bread', 'amala']
        },
        {
            name:'Akin Oluwanifemi',
            age:19,
            favoriteFoods:['Eba','ofeakwu', 'rice']
        }
    ])
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })
    


// Find all person documents
personModel
    .find()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })



// Find a person document by their favorite food
personModel
    .findOne({
        'favoriteFoods': 'Rice'
    })
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        });



// Find a person document by its ID
personModel
    .findById({
        '_id': '654c131f0a6c06f3574253a5'
    })
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        });



// Find a person by ID, update their favorite foods, and save the changes
personModel
    .findById('654c13743a2e9dddfc1d2da6')
        .then(doc => {
            if (doc) {
                doc.favoriteFoods.push('Akpu');
                return doc.save();
            } 
            else {
                console.log('Person not found');
            }
        })
            .then(savedDoc => {
                console.log('Updated Person:', savedDoc);
            })
            .catch(err => {
                console.error(err);
            });



// Find a person by name and update their age, returning the updated document
personModel
    .findOneAndUpdate(
    {
        'name':'Omar'
    },
    {
        $set: {age: 70}
    },
    {
        new: true
    })
        .then(doc => {
                console.log(doc)
        })
        .catch(err => {
                console.error(err)
        })



// Find a person by ID, and delete document
personModel
    .findOneAndDelete(
        {
            '_id': '654c13743a2e9dddfc1d2da5'
        })
        .then(doc => {
                console.log(doc)
        })
        .catch(err => {
                console.error(err)
        })