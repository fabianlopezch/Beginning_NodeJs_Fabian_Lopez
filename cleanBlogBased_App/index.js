// This file is the root of the project

const express = require('express'); 
const app = new express();
const PORT = 4000;
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost');
const fileUpload = require('express-fileupload');
const path = require('path');

const customMiddleWare = (req, res, next) => {
    console.log('Custom middleware called');
    next();
};

const validateMiddleWare = (req, res, next) => {
    if (req.files == null || req.body.title == null || req.body.body == null){
        return res.redirect('/posts/new');
    }
    next();
}

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

app.get('/', async (req, res) => {
    const blogposts = await BlogPost.find({});
    res.render('index', {
        blogposts: blogposts // Since key and value are the same we could shorten to blogposts
    });
    // console.log(blogposts);
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/post/:id', async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post', {
        blogpost
    });
});

const newPostController = require('./controllers/newPost');
app.get('/posts/new', newPostController);

app.post('/posts/store', (req, res) => {
    // console.log(req.body); // Print in the console log the entered values in the form

    let image = req.files.image;

    image.mv(path.resolve(__dirname, 'public/img', image.name), async (error) => {
        // model creates a new document with browser data
        await BlogPost.create({
            ...req.body,
            image: '/img/' + image.name
        });
        res.redirect('/');
    });
});