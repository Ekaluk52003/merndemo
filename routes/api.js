const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');

router.get('/',(req, res) => {    
    BlogPost.find({})
        .then((data)=>{
            res.json(data);
        })
        .catch((error)=> {
            console.log('eroro occur')
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newBlogPost = new BlogPost(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        } else
        // BlogPost
         res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

router.get('/name',(req, res) => {    
    const data = {
        username : 'Mill',
        age :5
    };
    res.json(data);
});
module.exports = router;
