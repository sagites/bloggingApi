const Blogs = require("../models/Blog");
const asyncWrapper = require("../middleware/async");

const createBlog = asyncWrapper(async (req, res) => {
  const blog = await Blogs.create({ ...req.body, user: req.user._id });
  res.status(201).json({ blog });
});

// const getAllBlogs = asyncWrapper(async (req, res) => {
//   const blog = await Blogs.find({})
//     .populate('user', 'username')
//     .populate('comments');
//   res.status(200).json({ blog });
// });

// const getBlog = asyncWrapper(async (req, res) => {
//   const { id: blogID } = req.params;
//   const blog = await Blogs.findOne({ _id: blogID })
//     .populate('user', 'username')
//     .populate('comments');
//   if (!blog) {
//     return res.status(404).json({ msg: `No blog with id ${blogID}` });
//   }
//   res.status(200).json({ blog });
// });

const getAllBlogs = asyncWrapper(async (req, res) => {
  const blog = await Blogs.find({})
    // .populate('User', 'username')
    // .populate('comments');
  res.status(200).json({ blog });
});

const getBlog = asyncWrapper(async (req, res) => {
  const { id: blogID } = req.params;
  const blog = await Blogs.findOne({ _id: blogID })
    // .populate('User', 'username')
    // .populate('comments');
  if (!blog) {
    return res.status(404).json({ msg: `No blog with id ${blogID}` });
  }
  res.status(200).json({ blog });
});

const deleteBlog = asyncWrapper(async (req, res) => {
  const { id: blogID } = req.params;
  const blog = await Blogs.findOneAndDelete({ _id: blogID });
  if (!blog) {
    return res.status(404).json({ msg: `No blog with id ${blogID}` });
  }
  res.status(200).json({ "msg": "Blog has been deleted" });
});

const updateBlog = asyncWrapper(async (req, res) => {
  const { id: blogID } = req.params;
  const updates = { ...req.body, updatedAt: Date.now() };
  const blog = await Blogs.findOneAndUpdate({ _id: blogID }, updates, {
    new: true,
    runValidators: true,
  });
  if (!blog) {
    return res.status(404).json({ msg: `No blog with id ${blogID}` });
  }
  res.status(200).json({ blog });
});

const likeBlog = asyncWrapper(async (req, res) => {
  const { id: blogID } = req.params;
  const updatedBlog = await Blogs.findByIdAndUpdate(
    blogID,
    { $inc: { likes: 1 } },
    { new: true }
  );
  res.status(200).json({ blog: updatedBlog });
});

const dislikeBlog = asyncWrapper(async (req, res) => {
  const { id: blogID } = req.params;
  const blog = await Blogs.findByIdAndUpdate(
    blogID,
    { $inc: { dislikes: 1 } },
    { new: true }
  );
  res.status(200).json({ blog });
});

const filterBlogs = asyncWrapper(async (req, res) => {
  const { category, tags } = req.query;
  let filter = {};
  if (category) {
    filter.category = category;
  }
  if (tags) {
    filter.tags = { $in: tags.split(',') };
  }
  const blogs = await Blogs.find(filter);
  res.status(200).json({ blogs });
});

const searchBlogs = asyncWrapper(async (req, res) => {
  const { q } = req.query;
  const blogs = await Blogs.find({ $text: { $search: q } });
  res.status(200).json({ blogs });
});

module.exports = {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  filterBlogs,
  searchBlogs,
};