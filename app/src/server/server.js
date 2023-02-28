const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(3001, () => {
  console.log("Yay, your server is running on port 3001.");
});
