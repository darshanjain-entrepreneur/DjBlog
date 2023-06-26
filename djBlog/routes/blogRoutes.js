const express = require('express');
const { deleteBlogController, getBlogbyIdController, updateBlogController, createBlogController, getAllBlogController } = require('../controllers/blogController');

const router = express.Router();

router.get('/allblog', getAllBlogController );

router.post('/createblog' , createBlogController);

router.put('/updateblog/:id' , updateBlogController);

router.get('/getblog/:id' , getBlogbyIdController);

router.delete('/deleteblog/:id' , deleteBlogController);

module.exports = router