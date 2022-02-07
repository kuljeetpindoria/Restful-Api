const express = require('express');
const Joi = require('joi'); //used for validation
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const studentRoute = require('./api/routes/student')
const facultyRoute = require('./api/routes/faculty')

mongoose.connect('mongodb+srv://kuljeet:Stkh%401895@cluster0.wgq90.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.connection.on('error', err=>{
    console.log('connection failed');
})

mongoose.connection.on('connected', connected=>{
    console.log('connected successfully')
})

app.use(bodyParser.urlencoded({extended :false}));

app.use(bodyParser.json());


app.use('/student', studentRoute);

app.use('/faculty', facultyRoute);

app.use((req, res, next) =>{
    res.status(404).json({
        error : 'bad request'
    })
})

/* 
app.use('/faculty', facultyRoute); */

module.exports = app;    