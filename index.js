const express = require("express");
const app = express();

const path = require("path");
const port = process.env.PORT || 3000;

// serve static files from react (front-end) directory
app.use(express.static(path.join(__dirname, "react", "build")));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}!`);
});
