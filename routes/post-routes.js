const express = require('express');
const {
    getPosts,
    getPost,
    deletePost,
    getEditPost,
    editPost,
    getAddPost,
    addPost
} = require('../controllers/post-controller');


const router = express.Router();

router.get('/posts', getPosts);

router.get('/posts/:id', getPost);

router.delete('/posts/:id', deletePost);

router.get('/edit/:id', getEditPost);

router.put('/edit/:id', editPost);

router.post('/add-post', addPost);

router.get('/add-post', getAddPost);

module.exports = router;
