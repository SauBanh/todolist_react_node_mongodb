// import mongoose to create new Schema
const mongoose = require('mongoose');

// creaet Schema
const todoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required: true
    }
})

// exprot this Schema
module.exports = mongoose.model('todo', todoItemSchema);