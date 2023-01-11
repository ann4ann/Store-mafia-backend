import Product from "../models/Product";

export const getAllProducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    return console.log(err);
  }
  if (!products) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ products });
};

export const addProduct = async (req, res, next) => {
  const { img, name, desc, price, aviableNum, category } = req.body;
  const product = new Product({
    img,
    name,
    desc,
    price,
    aviableNum,
    category,
  });
  try {
    await product.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(200).json({ product });
};

export const updateProduct = async (req, res, next) => {
  const { img, name, desc, price, aviableNum, rate, category } = req.body;
  const productId = req.params.id;
  let product;
  try {
    product = await Product.findByIdAndUpdate(productId, {
      img,
      name,
      desc,
      price,
      aviableNum,
      rate,
      category,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!product) {
    return res.status(500).json({ message: "Unable to update the product" });
  }
  return res.status(200).json({ product });
};
