const express = require("express");
const app = express();
const blogs = require("./routes/blog");
const connectDB = require("./db/connect");
require('dotenv').config();
const swaggerJsDoc = require('swagger-jsdoc');
const swagger = require('swagger-ui-express');

// routes

app.use(express.json());

app.use("/api/v1/blogs", blogs);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
