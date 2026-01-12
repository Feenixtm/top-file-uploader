const express = require("express");
const app = express();

require("dotenv").config();

// Forms, CSS

app.use(express.static("public"));

// EJS
const path = require("node:path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// --------------------------------------------------

app.get("/", (req, res) => {
    res.render("test");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {

});

app.get("/sign-up", (req, res) => {
    res.render("sign-up");
});

app.post("/sign-up", (req, res) => {
    
});

// --------------------------------------------------



// --------------------------------------------------

const PORT = process.env.PORT || 3002;

app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
        return error;
    }

    console.log("Listening to PORT: " + PORT);
})