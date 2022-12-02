const express = require('express'); // require express module
const app = express();  // calls express function to start new Express app
app.listen(3000, () => {
    console.log("App listening on port 3000")
});

app.get('/about', (request, response) => {
    response.end('About page');
});

app.get('/', (req, res) => {
    res.json({
        name: 'Fabian Lopez'
    });
});