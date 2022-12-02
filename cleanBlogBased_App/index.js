// This file is the root of the project

const express = require('express'); 
const app = new express();
const PORT = 4000;
const path = require('path');

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});

app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});