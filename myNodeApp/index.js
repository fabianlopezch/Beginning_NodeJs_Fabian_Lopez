const express = require('express'); // require express module
const app = express();  // calls express function to start new Express app
const path = require('path');

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("App listening on port 3000")
});

app.get('/', (req, res) => {
    res.json({
        name: 'Fabian Lopez'
    });
});

app.get('/index', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'));
});