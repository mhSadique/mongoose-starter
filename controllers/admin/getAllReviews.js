const Review = require("../../schema/reviewSchema");

const getAllReviews = async (req, res) => {
    try {
        await Review.find({}, (err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    reviews: data,
                    message: "Here are your reviews."
                })
            }
        })
    } catch {

    }
};

module.exports = getAllReviews;