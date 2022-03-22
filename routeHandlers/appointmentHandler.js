const express = require('express');
const createAppointment = require('../controllers/appointment/createAppointment');
const getAllAppointments = require('../controllers/appointment/getAllAppointments');
const router = express.Router();

// create an appointment
router.post('/create-new', createAppointment);

// get all appointments
router.get('/', getAllAppointments)


module.exports = router;