const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// require the schema that is defined for todos
const Todo = require('../schema/todoSchema');

// create a model of todos
// keep the model name singular
// const Todo = new mongoose.model("Todo", todoSchema);



// GET ALL THE TODOS
router.get('/', async (req, res) => {
    try {
        // await Todo.find({ status: req.body.status }, (err, data) => {
        await Todo.find({}, (err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    result: data,
                    message: "Here is your result."
                })
            }
        })
    } catch {

    }
});

// GET A TODO BY ID
router.get('/:id', async (req, res) => {
    try {
        await Todo.find({ _id: req.params.id }, (err, data) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    result: data,
                    message: "Here is your result."
                })
            }
        })
    } catch {

    }
})

// post a single todo
router.post('/', async (req, res) => {
    // call the model using new keyword to create a todo
    const newTodo = new Todo(req.body);
    // now save to data to database
    await newTodo.save(err => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error."
            })
        } else {
            res.status(200).json({
                message: "Todo was inserted successfully."
            })
        }
    });
})

// post multiple todos
router.post('/all', async (req, res) => {
    // this time req.body is an array of objects
    // to save this array, call insertMany() method on model name which is 'Todo'
    await Todo.insertMany(req.body, err => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error."
            })
        } else {
            res.status(200).json({
                message: "Todos were inserted successfully."
            })
        }
    })
})

// put todo
router.put('/:id', async (req, res) => {
    // call the updateOne() method on the model which is Todo
    // first parameter is the query filter, second parameter is the object instructing how to update the data
    try {
        const data = await Todo.findByIdAndUpdate(
            { _id: req.params.id }, {
            $set: {
                status: req.body.status
            }
        }, {
            useFindAndModify: false,
            new: true
        }, (err, doc) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json(doc);
            }
        }
        );
    } catch {

    }
})

// delete todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.deleteOne({ _id: req.params.id }, (err) => {
            if (err) {
                res.status(500).json({
                    error: "There was a server side error."
                })
            } else {
                res.status(200).json({
                    message: "Deleted successfully."
                })
            }
        })
    } catch {

    }
})

module.exports = router;