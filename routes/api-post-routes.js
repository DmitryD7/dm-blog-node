const express = require('express');
const {
    getPosts,
    getPost,
    deletePost,
    editPost,
    addPost
} = require('../controllers/api-post-controller');


const router = express.Router();

//Get all posts
router.get('/api/posts', getPosts);
//Add new post
router.post('/api/post', addPost);
//Get post by ID
router.get('/api/post/:id', getPost);
//Delete post by id
router.delete('/api/post/:id', deletePost);
//Update post by id
router.put('/api/post/:id', editPost);


module.exports = router;
