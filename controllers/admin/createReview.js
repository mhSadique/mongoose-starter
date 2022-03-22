const Review = require("../../schema/reviewSchema");

const createReview = async (req, res) => {
    try {
        const newReview = new Review(req.body);
        await newReview.save((err, createdReview) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    message: "Review created.",
                    result: createdReview
                })
            }
        })
    } catch {

    }
};

module.exports = createReview;