const Comments = require('../models/Comment');
const Blogs = require('../models/Blog');
const asyncWrapper = require('../middleware/async');

const createComment = asyncWrapper(async (req, res) => {
  const { id: blogID } = req.params;
  const blog = await Blogs.findById(blogID);
  if (!blog) {
    return res.status(404).json({ msg: `No blog with id ${blogID}` });
  }
  const comment = await Comments.create({
    content: req.body.content,
    blog: blogID,
    user: req.user._id,
  });
  blog.comments.push(comment._id);
  await blog.save();
  res.status(201).json({ comment });
});

const getComments = asyncWrapper(async (req, res) => {
  const { id: blogID } = req.params;
  const comments = await Comments.find({ blog: blogID }).populate('user', 'username');
  res.status(200).json({ comments });
});

module.exports = { createComment, getComments };