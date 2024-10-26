// const express = require("express");
// const app = express();
// const blogs = require("./routes/blog");
// const connectDB = require("./db/connect");
// require('dotenv').config();
// const swaggerJsDoc = require('swagger-jsdoc');
// const swagger = require('swagger-ui-express');

// app.use(express.json());

// app.use("/api/v1/blogs", blogs);

// const port = 3000;

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGODB_URL);
//     app.listen(port, console.log(`server is listening on port ${port}...`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

const express = require("express");
const dotenv = require("dotenv")
const connectDB = require("./db/connect");
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/authRoutes");
const commentRoutes = require("./routes/commentRoutes");
const errorHandler = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/blogs", commentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();