const Doctor = require("../../schema/doctorSchema");

const createDoctor = async (req, res) => {
    try {
        const newDoctor = new Doctor(req.body);
        await newDoctor.save(err => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    message: "Doctor created."
                })
            }
        })
    } catch {

    }
}

module.exports = createDoctor;