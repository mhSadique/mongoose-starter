const Appointment = require("../../schema/appointmentSchema");

const getAllAppointments = async (req, res) => {
    try {
        await Appointment.find({}, (err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    appointments: data,
                    message: "Here are your appointments."
                })
            }
        })
    } catch {

    }
};

module.exports = getAllAppointments;