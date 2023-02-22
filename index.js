const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/user_management_system',
    console.log("Mongodb connected.................")
);
const express = require("express");
const app = express();
const userRoute = require('./routes/userRoute');
app.use('/', userRoute);


app.listen(3000, function () {
    console.log("server is running on 3000");
})

//first make model
