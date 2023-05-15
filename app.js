/* Using Express */
const express = require("express");
const app = express();

/* Settings for port number */
const PORT = 8000;

/* Settings for port number */
app.set("view engine", "ejs");
app.set("/views", "views");
/* Settings for static directory */
app.use("/static", express.static(__dirname + "/static"));

/* Routing */
app.get("/", (req, res) => {
  res.render("index"); /* Start path from /views/ */
});

/* Binding */
app.get("/contents", (req, res) => {
  res.render("shin/contents");
});
app.get("/header", (req, res) => {
  res.render("shin/header");
});
app.get("/tagged", (req, res) => {
  res.render("shin/tagged");
});
app.get("/saved", (req, res) => {
  res.render("shin/saved");
});
app.get("/common", (req, res) => {
  res.render("shin/common")
})

app.get("/clickp", (req, res) => {
  res.render("shin/click-profile");
});
app.get("/follow", (req, res) => {
  res.render("shin/follow");
});
app.get("/follower", (req, res) => {
  res.render("shin/follower")
})

app.get("/main", (req, res) => {
  res.render("main");
});

for (let i = 0; i < 8; ++i) {
  app.get(`/story/:${i}`, (req, res, next) => {
    res.render("jihyo/story", { imageNum: req.params });
  });
}

for (let i = 0; i < 10; ++i) {
  app.get(`/main${i}`, (req, res) => {
    res.render("main", { imgNum: `${i}` });
  });
}

/* Bind and listen the connections on the specified host and port */
app.listen(PORT, () => {
  console.log(`localhost:${PORT} is open!`);
});
