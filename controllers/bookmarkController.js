const Blogs = require("../models/Blog");
const asyncWrapper = require("../middleware/async");

const addToBookmark = asyncWrapper(async (req, res) => {
  try {
    const { id: blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {}
});

const getAllBookmarks = asyncWrapper(async (req, res) => {
  res.send("hello");
});

module.exports = {
  addToBookmark,
  getAllBookmarks,
};
