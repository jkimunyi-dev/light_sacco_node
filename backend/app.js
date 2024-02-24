const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Backend Here");
});

app.listen(8080, console.log("Server Running on Port http://localhost :8080"));
