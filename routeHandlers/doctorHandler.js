const express = require('express');
const createDoctor = require('../controllers/doctor/createDoctor');
const createReview = require('../controllers/doctor/createReview');
const getAllDoctors = require('../controllers/doctor/getAllDoctors');
const getSingleDoctor = require('../controllers/doctor/getSingleDoctor');
const router = express.Router();

// create multiple doctors
router.post('/', createDoctor);

// get all the doctors
router.get('/', getAllDoctors);

// get a single doctors
router.get('/single/:doctorId', getSingleDoctor);

// add a review to doctor's profile and return an array of reviews only
// router.post('/:id', createReview);

module.exports = router;