const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/", async(req, res) => {
    let names = req.body.names;
    let email = req.body.email;
    let user = {
        names: names,
        email: email,
        date: Date.now(),
        blogs: [] // initialize empty blogs array

    }
    let newUser = new User(user)
    await newUser.save()
    res.json({
        success: true,
        message: "User added successfully",
        data : newUser
    })
})
router.get("/", async(req, res) => {
    let allUsers = await User.find()
    res.json({
        success: true,
        message: "all data fetched succesfully",
        data : allUsers
    })
})
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    let user = await User.findById(id);
    res.json({
        success: true, 
        message: "user fetched successfully",
        data : user
    })

})


module.exports = router;