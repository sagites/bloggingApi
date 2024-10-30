const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/authRoutes");
const commentRoutes = require("./routes/commentRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");
const errorHandler = require("./middleware/error");

const app = express();

app.use(express.json());

app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/comments", commentRoutes);
app.use("/api/v1/bookmarks", bookmarkRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 2500;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();