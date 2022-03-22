const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    doctorId: String,
    reviewText: String,
    reviewedBy: String,
    approved: Boolean
});

const Review = new mongoose.model("Review", reviewSchema);

module.exports = Review;