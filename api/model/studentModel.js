const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    _id: new mongoose.Types.ObjectId,
    name: String,
    email: String,
    phone: Number,
    gender: String
})

module.exports = mongoose.model('Student', studentSchema)