const Comment = require("../models/Comment");
const Blog = require("../models/Blog");
const asyncWrapper = require("../middleware/async");

const createComment = asyncWrapper(async (req, res) => {
  const { id: blogId } = req.params;
  const { content } = req.body;

  try {
    // Ensure the blog exists
    const blog = await Blog.findById(blogId);
    console.log(blog.title);
    if (!blog) {
      return res.status(404).json({ msg: `blog not found` });
    }

    // Create a new comment
    const newComment = new Comment({
      blog: blogId,
      content: content,
      user: req.user.id,
    });

    // Save the comment to the database
    const savedComment = await newComment.save();

    res.status(201).json({ success: true, comment: savedComment });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const getComments = asyncWrapper(async (req, res) => {
  const { id: blogId } = req.params;
  const comments = await Comment.find({ blog: blogId }).populate(
    "user",
    "username _id"
  );
  res.status(200).json({ comments });
});

module.exports = {
  createComment,
  getComments,
};
