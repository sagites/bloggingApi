# Blogging API

Welcome to the Blogging API project! This API was created as a challenge inspired by [roadmap.sh](https://roadmap.sh), aimed at honing skills in MongoDB, Node.js, asynchronous programming, and problem-solving.

## Features

- Create, read, update, and delete blog posts
- User authentication and authorization
- Comment on posts
- Like and dislike posts
- Filter posts by categories and tags
- Search functionality

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v12.x or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (Ensure MongoDB server is running)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/blogging-api.git
    cd blogging-api
    ```

2. **Install the dependencies:**

    ```sh
    npm install
    ```

3. **Create a `.env` file in the root directory and add your MongoDB URI and other environment variables:**

    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

## Usage

1. **Start the server:**

    ```sh
    npm start
    ```

2. **Using Postman to test the API:**
   - Open [Postman](https://www.postman.com/downloads/).
   - Load the API endpoints to interact with the Blogging API.

## Endpoints

### Authentication

- **Register a new user**

    ```http
    POST /api/auth/register
    ```

    - Body: 
      ```json
      {
          "username": "string",
          "email": "string",
          "password": "string"
      }
      ```

- **Login**

    ```http
    POST /api/auth/login
    ```

    - Body: 
      ```json
      {
          "email": "string",
          "password": "string"
      }
      ```

### Posts

- **Create a new post**

    ```http
    POST /api/posts
    ```

    - Headers: 
      ```json
      {
          "Authorization": "Bearer <token>"
      }
      ```
    - Body: 
      ```json
      {
          "title": "string",
          "content": "string",
          "tags": ["string"],
          "category": "string"
      }
      ```

- **Get all posts**

    ```http
    GET /api/posts
    ```

- **Get a single post**

    ```http
    GET /api/posts/:id
    ```

- **Update a post**

    ```http
    PUT /api/posts/:id
    ```

    - Headers: 
      ```json
      {
          "Authorization": "Bearer <token>"
      }
      ```
    - Body: 
      ```json
      {
          "title": "string",
          "content": "string",
          "tags": ["string"],
          "category": "string"
      }
      ```

- **Delete a post**

    ```http
    DELETE /api/posts/:id
    ```

    - Headers: 
      ```json
      {
          "Authorization": "Bearer <token>"
      }
      ```

### Comments

- **Add a comment to a post**

    ```http
    POST /api/posts/:id/comments
    ```

    - Headers: 
      ```json
      {
          "Authorization": "Bearer <token>"
      }
      ```
    - Body: 
      ```json
      {
          "content": "string"
      }
      ```

- **Get comments for a post**

    ```http
    GET /api/posts/:id/comments
    ```

- **Delete a comment**

    ```http
    DELETE /api/posts/:postId/comments/:commentId
    ```

    - Headers: 
      ```json
      {
          "Authorization": "Bearer <token>"
      }
      ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
