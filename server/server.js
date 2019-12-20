const express = require("express");
const webpack = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("../webpack.config.dev");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://cluster0-jyrjb.mongodb.net/test", {
  useNewUrlParser: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("We are connected!");
});

const artists = [
  {
    id: 1,
    name: "Metallica"
  },
  {
    id: 2,
    name: "Iron Maiden"
  },
  {
    id: 3,
    name: "Deep Purple"
  }
];

// app.get("/", function(req, res) {
//   res.send("hello API");
// });

// app.get("/artists", function(req, res) {
//   res.send(artists);
// });

// app.use(webpackMiddleware(webpack(webpackConfig)));
// app.get("/*", (req, resp) => {
//   resp.sendFile(path.join(__dirname, "./index.html"));
// });

// // var Users = mongoose.model("User", schema);
// app.use("/api/users", signup);
// app.use("/api/users", login);

// app.get("/*", (req, res) => {
//   const file = path.join(__dirname, "../public/index.html");
//   let artist = artists.find(artist => artist.id === Number(req.params.id));
//   console.log(file);
//   res.sendFile(file);
// });

app.get("/artists/:id", (req, res) => {
  console.log(req.params);
  let artist = artists.find(artist => artist.id === Number(req.params.id));
  res.send(artist);
});

app.post("/artists", (req, res) => {
  console.log(req.body);
  res.send("post data");
});

app.listen(3001, function() {
  console.log("API app started");
});
