const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    username: String,
    email: String,
    password: String,
    blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Blogs"
        }
    ]
});

module.exports = mongoose.model("Blog", BlogPost);
