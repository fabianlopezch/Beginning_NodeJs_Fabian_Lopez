// This file is used to test the CRUD operations with Mongoose models

const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

BlogPost.create({
    title: "The Mythbuster's Guide to SAving Money on energy Bills",
    body: "This is the description for this document..."
}, (error, blogpost) => {
    console.log(error, blogpost);
})