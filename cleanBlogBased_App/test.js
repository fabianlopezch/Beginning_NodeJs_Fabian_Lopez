// This file is used to test the CRUD operations with Mongoose models

const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

// Creating a new document in BlogPosts collection
BlogPost.create({
    title: "The Mythbuster's Guide to Saving Money on energy Bills (last 3)",
    body: "This is the description for this document..."
}, (error, blogpost) => {
    console.log(error, blogpost);
});

// Selecting all documents in BlogPosts collection
BlogPost.find(
    {}, (error, blogpost) => {
        console.log(error, blogpost);
    }
);

// Finding all documents in BlogPosts collection with a particular title
BlogPost.find(
    {title: "The Mythbuster's Guide to Saving Money on energy Bills (last 3)"
},  (error, blogpost) => {
        console.log(error, blogpost);
    }
);

// Finding all documents in BlogPosts with 'last' in the title
BlogPost.find(
    {
        title: /last 3/
    },
    (error, blogpost) => {
        console.log(error, blogpost);
    }
);

// Retrieve single documents with unique id _id

let id = "638ec4f80b716d1a77b127bf";

BlogPost.findById(id, (error, blogpost) => {
    console.log(error, blogpost);
});

// Updating a record by Id
BlogPost.findByIdAndUpdate(id, {
    title: "Update title"
}, (error, blogpost) => {
    console.log(error, blogpost);
});