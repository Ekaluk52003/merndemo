const mongoose = require('mongoose');
// Schema
const Schema = mongoose.Schema;
const BlogPostScheme = new Schema({
    title : String,
    body : String,
    date : {
        type : String,
        default : Date.now()
    }
});

// Model
const BlogPost = mongoose.model('BlogPost', BlogPostScheme);

module.exports = BlogPost;
