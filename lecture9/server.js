const express = require("express");
const app = express();
console.log(app);

app.get("/", (req, res) => {
    console.log(req);
    res.send("hello world")
})
app.use(express.json());
app.post("/form", (req, res) => {
    console.log(req.body);
    res.send(`Recived data ${req.body.name}, ${req.body.email}`)
    console.log(`Recived data ${req.body.name}, ${req.body.email}`)
})

app.listen(3000, (req, res) => {
    console.log("Server is Started ");
})