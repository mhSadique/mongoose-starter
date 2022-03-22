const User = require("../../schema/userSchema");

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save((err, createdUser) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    message: "User created.",
                    result: createdUser
                })
            }
        })
    } catch {

    }
};

module.exports = createUser;