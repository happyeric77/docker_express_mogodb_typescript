import express from "express";
import path from "path";
import fs from "fs";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
let app = express();

// Render static (CSS & JS) files from root folder
app.use(express.static(__dirname));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/profile-picture", function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  res.writeHead(200, { "Content-Type": "image/jpg" });
  res.end(img, "binary");
});

app.post("/update-profile", function (req, res) {
  let userObj = req.body;
  console.log("WIP: update-profile");
  res.send("WIP: update-profile");
});

app.get("/get-profile", function (req, res) {
  let response: any = {};
  console.log("WIP: get-profile");
  res.send("WIP: get-profile");
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
