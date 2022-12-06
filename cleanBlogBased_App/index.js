// This file is the root of the project

const express = require('express'); 
const app = new express();
const PORT = 4000;
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true}); // Connecting to MongoDB from Node

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});