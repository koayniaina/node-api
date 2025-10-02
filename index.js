const express = require("express");
const Product = require("./models/productModels");
const app = express();

const mongosse = require("mongoose");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Express");
});

app.get("/product", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//  Update
app.put("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: `Product not found with ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: `Product not found with ${id}` });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
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
