// This controler handles the requests asking for a particular post

const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post', {
        blogpost
    });
};