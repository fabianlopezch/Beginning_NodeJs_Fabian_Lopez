// This controller handles the requests requiring the home page

const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blogposts = await BlogPost.find({});
    res.render('index', {
        blogposts: blogposts // Since key and value are the same we could shorten to blogposts
    });
    // console.log(blogposts);
};