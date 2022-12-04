// This file is the root of the project

const express = require('express'); 
const app = new express();
const PORT = 4000;
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

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