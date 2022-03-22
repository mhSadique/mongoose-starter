const Doctor = require("../../schema/doctorSchema");

const getAllDoctors = async (req, res) => {
    try {
        await Doctor.find({}, (err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    doctors: data,
                    message: "Here are your doctors."
                })
            }
        })
    } catch {

    }
};

module.exports = getAllDoctors;