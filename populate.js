require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const Jsonproducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(Jsonproducts);
    console.log("success");
    process.exit(0);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

start();
