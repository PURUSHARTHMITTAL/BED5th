const express = require("express");

const app = express();

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true })); // Parses form data from POST
app.use(express.json()); // Parses JSON data if needed

// Routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about.html", (req, res) => {
    res.sendFile(__dirname + "/about.html");
});

app.get("/registration.html", (req, res) => {
    res.sendFile(__dirname + "/registration.html");
});

app.post("/addUser", (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    res.json({
        username,
        password
    });
});

// Start server
app.listen(5555, () => {
    console.log("Server started on port 5555");
});