const Doctor = require("../../schema/doctorSchema");

const createReview = async (req, res) => {
    try {
        await Doctor.findByIdAndUpdate(
            { _id: req.params.id },
            { $push: { reviews: req.body } },
            { useFindAndModify: false, new: true },
            (err, doc) => {
                if (err) {
                    res.status(500).json({
                        error: "There was a server side error."
                    })
                } else {
                    // return all the reviews of the doctor
                    res.status(200).json(doc.reviews);
                }
            }
        );
    } catch {

    }
};

module.exports = createReview;