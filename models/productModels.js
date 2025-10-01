const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Add a product name'],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    img: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // <-- doit être ici
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
