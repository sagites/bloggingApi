const Blogs = require("../models/Blog");

const createBlog = async (req, res) => {
  const blog = await Blogs.create(req.body);
  res.status(201).json({ blog });
};

const getAllBlogs = async (req, res) => {
  const blog = await Blogs.find({});
  res.status(200).json({ blog });
};
const getBlog = async (req, res) => {
  try {
    const { id: blogID } = req.params;
    const blog = await Blogs.findOne({ _id: blogID });
    if (!blog) {
      return res.status(404).json({ msg: `No task with id ${taskID}` });
    }
    res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const { id: blogID } = req.params;
    const Blog = await Blogs.findOneAndDelete({ _id: blogID });
    if (!Blog) {
      return res.status(404).json({ msg: `No blog with the id of ${blogID}` });
    }
    res.status(200).json({ Blog });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id: blogID } = req.params;
    const updates = { ...req.body, updatedAt: Date.now() };
    const blog = await Blogs.findOneAndUpdate({ _id: blogID }, updates, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return res.status(404).json({ msg: `No blog with the id of ${blogID}` });
    }

    res.status(200).json({ blog });
  } catch (error) {}
};
module.exports = {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
};
