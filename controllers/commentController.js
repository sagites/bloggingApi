const Comment = require("../models/Comment");
const BlogPost = require("../models/Blog");
const asyncWrapper = require("../middleware/async");

const createComment = asyncWrapper(async (req, res) => {
  const { blogId } = req.params;
  const { content } = req.body;
  const comment = await Comment.create({ content, blog: blogId, user: req.user.id });
  res.status(201).json({ comment });
});

const getComments = asyncWrapper(async (req, res) => {
  const { blogId } = req.params;
  const comments = await Comment.find({ blog: blogId }).populate("user", "username");
  res.status(200).json({ "blogId":blogId });
});

module.exports = {
  createComment,
  getComments,
};