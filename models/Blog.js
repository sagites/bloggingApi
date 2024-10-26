const mongoose = require('mongoose');

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
    }

});

blogPostSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

module.exports = BlogPost;