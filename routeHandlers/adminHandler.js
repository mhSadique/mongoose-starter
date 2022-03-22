const express = require('express');
const changeReviewStatus = require('../controllers/admin/changeReviewStatus');
const createReview = require('../controllers/admin/createReview');
const getAllReviews = require('../controllers/admin/getAllReviews');
const getSingleDoctorReview = require('../controllers/admin/getSingleDoctorReview');
const router = express.Router();

//////////////////////
////// REVIEWS ///////
//////////////////////

// get all the reviews
router.get('/reviews', getAllReviews);

// get single doctor's reviews
router.get('/reviews-of-single-doctor/:doctorId', getSingleDoctorReview);

// create a review ** this route is not actually an admin route, later remove this from here
router.post('/create-review', createReview);

// change the status of 'approved' to 'true' when it was 'false' and vice versa
router.put('/change-review-status/:id', changeReviewStatus);


module.exports = router;