const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const uri = "mongodb+srv://oznwachukwu-portfolio:£$WEB078502sling$@oznwachukwu-portfolio.t8grxxm.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB... All good in the hood");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 8000, () => console.log("Server running..."));
