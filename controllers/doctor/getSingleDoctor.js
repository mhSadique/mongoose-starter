const Doctor = require("../../schema/doctorSchema");

const getSingleDoctor = async (req, res) => {
    try {
        await Doctor.find({ _id: req.params.doctorId }, (err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    doctor: data,
                    message: "Here is your doctor."
                })
            }
        })
    } catch {

    }
};

module.exports = getSingleDoctor;