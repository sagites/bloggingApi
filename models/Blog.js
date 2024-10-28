// const mongoose = require('mongoose');

// const blogPostSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: [true, 'must provide title']
//     },
//     content: {
//         type: String,
//         required: [true, 'must provide Content']
//     },
//     category: {
//         type: String,
//         required: [true, 'must provide category']
//     },
//     tags: {
//         type: [String],
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now,
//     }

// });

// blogPostSchema.pre('save', function(next) {
//     this.updatedAt = Date.now();
//     next();
// });

// const BlogPost = mongoose.model("BlogPost", blogPostSchema);

// module.exports = BlogPost;


const mongoose = require('mongoose');
// const User = require('../models/User')
// const Comment = require('../models/Comment')
const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'must provide title']
    },
    content: {
        type: String,
        required: [true, 'must provide Content']
    },
    category: {
        type: String,
        required: [true, 'must provide category']
    },
    tags: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
});

blogPostSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;