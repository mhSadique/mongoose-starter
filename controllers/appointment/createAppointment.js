const Appointment = require("../../schema/appointmentSchema");

const createAppointment = async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save((err, createdAppointment) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    message: "Appointment created.",
                    result: createdAppointment
                })
            }
        })
    } catch {

    }
};

module.exports = createAppointment;