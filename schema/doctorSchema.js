const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name: String,
    fee: Number,
    designation: String,
    email: String,
    phone: String,
    gender: String,
    imageUrl: String,
});

const Doctor = new mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;