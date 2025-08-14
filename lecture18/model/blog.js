const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    title: String,
    body: String, 
    date: Date,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "user" // must match the model name of the user schema
    }
});

module.exports = mongoose.model("user", BlogPost);
