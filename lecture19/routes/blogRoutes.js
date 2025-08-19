const express = require("express");
const router = express.Router(); //smal --> app
const Blog = require("../model/blog");
const User = require("../model/user");  


router.post("/", async(req, res) => {
    let title = req.body.title;
    let body = req.body.body;
    let userId = req.body.userId;

    let blog = {
        title: title,
        body: body,
        date: Date.now(),
        userId: userId
    }
    let newBlog = new Blog(blog)
    await newBlog.save()

    let user = await User.findById(userId);

    if(!user){
        return res.json({
            success: false,
            message: "Invalid user"
        });
    }

    user.blogs.push(newBlog._id);
    await user.save();

    res.json({
        success: true,
        message: "blog added successfully",
        data : newBlog
    })
})

router.delete("/:blogId", async (req, res) => {
    let blogId = req.params.blogId;
    let userId = req.body.userId;
    let blogExist = await Blog.findById(blogId);
    if(!blogExist){
        return res.json({
            success: false,
            message: "blog does not exist"
        })
    }
    if(blogExist.userId != userId){
        return res.json({
            success: false,
            message:"Permission denied"
        })
    }
    await Blog.findByIdAndDelete(blogId);
})
//Read
//read all data
//read single data

router.get("/", async(req, res) => {
    let allBlogs = await Blog.find()
    res.json({
        success: true,
        message: "all data fetched succesfully",
        data : allBlogs
    })
})
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    let blog = await Blog.findById(id);
    res.json({
        success: true, 
        message: "blog fetched successfully",
        data : blog
    })

})









module.exports = router