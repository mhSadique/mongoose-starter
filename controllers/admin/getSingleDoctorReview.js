const Review = require("../../schema/reviewSchema");

const getSingleDoctorReview = async (req, res) => {
    try {
        await Review.find({ doctorId: req.params.doctorId }, (err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    reviews: data,
                    message: "Here are your reviews for a single doctor."
                })
            }
        })
    } catch {

    }
};

module.exports = getSingleDoctorReview;