const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bp = require('body-parser');

const {urlencoded, json} = bp;
const PORT = process.env.PORT || 7000;

//create base server
const app = express();

//mongodb connection
mongoose.connect('mongodb://localhost/todo-app',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},() => {
    console.log("successfull connection to mongodb server")
})

//middleware
app.use(urlencoded({extended: true}));
app.use(json());
app.use(express.static('public'));
app.set('view engine',"ejs");

//routes
app.use(require('./routes/index'));
app.use(require('./routes/todo'));

//server config
app.listen(PORT,(req, res) => {
    console.log(`http://localhost:${PORT}`);
})