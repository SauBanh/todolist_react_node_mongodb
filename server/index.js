const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors =  require('cors')

const app = express();
// use express.json() to get data into json format 
app.use(express.json());
// PORT 
const PORT = process.env.PORT || 5500;

app.use(cors());

// improt routers
const todoItemRouter = require('./routes/todoItems');


// connect to mongodb 
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB_CONNECT)
    .then(()=> console.log("Database connected"))
    .catch(err => console.log(err))

app.use('/', todoItemRouter)

// add PORT and connect to server
app.listen(PORT,()=>console.log('Server connected'));
