// This controller stores in the database the information 
// filled in the create form.

const BlogPost = require('../models/BlogPost');
const path = require('path');

module.exports = (req, res) => {
    
    // console.log(req.body); // Print in the console log the entered values in the form

    let image = req.files.image;

    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => {
        // model creates a new document with browser data
        await BlogPost.create({
            ...req.body,
            image: '/img/' + image.name
        });
        res.redirect('/');
    });
}