const express = require("express");
const path = require("path");

const app = express();

// Set Pug as template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files (JS, images, css) from /public
app.use("/static", express.static(path.join(__dirname, "public")));

// Route for homepage
app.get("/", (req, res) => {
    res.render("index"); // renders views/index.pug
});

// IMPORTANT for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
