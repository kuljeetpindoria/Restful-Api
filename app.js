const express = require('express');

const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const studentRoute = require('./api/routes/student')
const userRoute = require('./api/routes/user')

mongoose.connect('mongodb+srv://kuljeet:Stkh%401895@cluster0.wgq90.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.connection.on('error', err => {
    console.log('connection failed');
})

mongoose.connection.on('connected', connected => {
    console.log('connected successfully')
})

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use('/student', studentRoute);
app.use('/user', userRoute)


app.use((req, res, next) => {
    res.status(404).json({
        error: 'bad request'
    })
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


module.exports = app;    