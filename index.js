const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const todoHandler = require('./routeHandlers/todoHandler');
const doctorHandler = require('./routeHandlers/doctorHandler');
const adminHandler = require('./routeHandlers/adminHandler');
const appointmentHandler = require('./routeHandlers/appointmentHandler');
const userHandler = require('./routeHandlers/userHandler');

// app initialization
const app = express();
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 3000;

// mongodb uri
// const mongodbUri = 'mongodb://habibullah:oGgLs1mMSsvFW6T9@cluster0-shard-00-00.0gjnb.mongodb.net:27017,cluster0-shard-00-01.0gjnb.mongodb.net:27017,cluster0-shard-00-02.0gjnb.mongodb.net:27017/TO_DO_APP?ssl=true&replicaSet=atlas-6k9h56-shard-0&authSource=admin&retryWrites=true&w=majority';

const mongodbUri = 'mongodb+srv://habibullah:oGgLs1mMSsvFW6T9@cluster0.0gjnb.mongodb.net/UniHealth?retryWrites=true&w=majority';

// database connection with mongoose
mongoose
    .connect(mongodbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('connection successful');
    })
    .catch((error) => {
        console.log(error);
    });

// application routes
// app.use('/todo', todoHandler);
app.use('/doctor', doctorHandler);
app.use('/admin', adminHandler);
app.use('/appointment', appointmentHandler);
app.use('/user', userHandler);


// default error handler
function errorHandler(err, req, res, next) {
    if (res.heaherSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
}

app.listen(port, () => {
    console.log('listening to port 3000');
})