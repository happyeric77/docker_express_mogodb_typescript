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

// use when staring application locally
let mongoUrlLocal = "mongodb://admin:admin@localhost:27017";

// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin:admin@mongodb";

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "user-account";

app.post("/update-profile", function (req, res) {
  let userObj = req.body;
  try {
    MongoClient.connect(
      mongoUrlDocker,
      // mongoClientOptions,
      (err, client) => {
        if (client) {
          let db = client.db(databaseName);
          userObj["userid"] = 1;

          let query = { userid: 1 };
          let newvalues = userObj;
          let collection = db?.collection("users");
          collection.updateOne(query, { $set: newvalues }, (err, result) => {
            if (!err) {
              console.log(result);
              client.close();
            }
          });
        }
      }
    );

    res.status(200);
    res.send(userObj);
  } catch (e: any) {
    res.status(404);
    res.send(`Error connecting database: ${JSON.stringify(e)}`);
  }
  res.send("WIP: update-profile");
});

app.get("/get-profile", function (req, res) {
  // Connect to the db
  try {
    MongoClient.connect(mongoUrlDocker, async (err, client) => {
      let db = client?.db(databaseName);
      let query = { userid: 1 };
      let collection = db?.collection("users");
      let result = await collection?.findOne(query);
      res.send(result);
    });
  } catch (e) {
    res.status(404);
    res.send(`Error connecting database: ${JSON.stringify(e)}`);
  }
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
