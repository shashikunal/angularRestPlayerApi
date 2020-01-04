const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

require("./Model/Post");
const Post = mongoose.model("posts");

const databaseUrl =
  "mongodb+srv://jspiders:shashi123@cluster0-trwtz.mongodb.net/test?retryWrites=true&w=majority";

//database connection
mongoose.connect(
  databaseUrl,
  { useUnifiedTopology: true, useNewUrlParser: true },
  err => {
    if (err) throw err;
    console.log("database is connected");
  }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

//routing in nodejs
app.get("/posts", (req, res) => {
  Post.find({})
    .sort({ date: "desc" })
    .then(post => {
      res.json(post);
    })
    .catch(err => console.log(err));
});
app.post("/createPost", (req, res) => {
  const newPosts = {
    title: req.body.title,
    details: req.body.details,
    phone: req.body.phone
  };
  console.log(newPosts);
  new Post(newPosts)
    .save()
    .then(post => {
      res.json(post);
    })
    .catch(err => console.log(err));
});

const port = process.env.PORT || 2000;
app.listen(port, err => {
  if (err) throw err;
  console.log("nodejs server created and is running on", port);
});
