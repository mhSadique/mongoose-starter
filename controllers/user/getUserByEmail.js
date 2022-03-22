const User = require("../../schema/userSchema");

const getUserByEmail = async (req, res) => {
    try {
        await User.find({ email: req.params.email }, (err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    user: data,
                    message: "Here is your user."
                })
            }
        })
    } catch {

    }
};

module.exports = getUserByEmail;