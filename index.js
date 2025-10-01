// const { error } = require("console");
const express = require("express");
const Product = require('./models/productModels')
const app = express();

const mongosse = require("mongoose");

app.use(express.json())


// Routes
app.get("/", (req, res) => {
  res.send("Hello From Express");
});

app.post("/product", async(req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).json(product);
  } catch (error) {
    console.logo(error.message);
    res.status(500).json({message: error.message})
  }
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
