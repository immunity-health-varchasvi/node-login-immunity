const express = require("express");
const path = require("path");
const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, "client", "build")));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
