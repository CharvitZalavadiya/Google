const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname,"public")));

const dataPath = path.join(__dirname,"data.json");
// const dataPath = path.join(__dirname,"/public/images/");


app.get('/', (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading", err)
        }
        const jsonData = JSON.parse(data)
        res.json(jsonData);
    });
});



app.listen(4040, console.log(`server is running on 4040`))