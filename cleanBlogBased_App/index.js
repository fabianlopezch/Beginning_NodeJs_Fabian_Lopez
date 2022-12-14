// This file is the root of the project

const express = require('express'); 
const app = new express();
const PORT = 4000;
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const customMiddleWare = require('./middleware/customMiddleware');

const validateMiddleWare = require('./middleware/validationMiddleware');

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true}); // Connecting to MongoDB from Node

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());
app.use(customMiddleWare);
app.use('/posts/store', validateMiddleWare);

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});

const homeController = require('./controllers/home');
app.get('/', homeController);

const getPostController = require('./controllers/getPost');
app.get('/post/:id', getPostController);

const newPostController = require('./controllers/newPost');
app.get('/posts/new', newPostController);

const storePostController = require('./controllers/storePost');
app.post('/posts/store', storePostController);