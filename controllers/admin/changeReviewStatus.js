const Review = require("../../schema/reviewSchema");

const changeReviewStatus = async (req, res) => {
    try {
        await Review.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: { approved: req.body.approvedStatus } },
            { useFindAndModify: false, new: true },
            (err, updatedReview) => {
                if (err) {
                    res.status(500).json({
                        error: "There was a server side error."
                    })
                } else {
                    res.status(200).json({
                        success: true,
                        updatedReview: updatedReview
                    });
                }
            }
        );
    } catch {

    }
}

module.exports = changeReviewStatus;