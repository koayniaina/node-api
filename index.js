// const { error } = require("console");
const express = require("express");
const app = express();

const mongosse = require("mongoose");

// Routes
app.get("/", (req, res) => {
  res.send("Hello From Express");
});

mongosse
  .connect(
    "mongodb+srv://setraniaina08_db_user:zvLGTGmneuPn7hlV@dbexpress.r1aipu3.mongodb.net/API"
  )
  .then(() => {
    console.log("Connect to MongoDB");
    app.listen(3000, () => {
      console.log("server running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
