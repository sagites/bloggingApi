const express = require('express');
const { createComment, getComments } = require('../controllers/commentController');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.route('/:id')
  .post(protect, createComment)
  .get(getComments);

module.exports = router;