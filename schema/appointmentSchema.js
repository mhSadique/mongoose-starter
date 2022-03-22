const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
    doctorId: String,
    email: String,
    name: String,
    payment: Number,
    phone: String,
    preferedDate: String,
    preferedTime: String
});

const Appointment = new mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;