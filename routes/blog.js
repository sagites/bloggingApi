// const express = require('express');
// const router = express.Router();
// const {getAllBlogs,createBlog,getBlog,updateBlog,deleteBlog} = require('../controllers/blogs');


// router.route('/').get(getAllBlogs).post(createBlog);
// router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog);

// module.exports = router

const express = require('express');
const {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  filterBlogs,
  searchBlogs,
} = require('../controllers/blogs');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/')
  .get(getAllBlogs)
  .post(protect, createBlog);

router.route('/:id')
  .get(getBlog)
  .put(protect, updateBlog)
  .delete(protect, deleteBlog);

router.route('/:id/like')
  .post(protect, likeBlog);

router.route('/:id/dislike')
  .post(protect, dislikeBlog);

router.route('/filter')
  .get(filterBlogs);

router.route('/search')
  .get(searchBlogs);

module.exports = router;