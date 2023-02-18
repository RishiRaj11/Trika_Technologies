import Products from "../model/product_schema.js";

export const getAllProducts = async (request, response) => {
  try {
    const products = await Products.find({});
    if (products.length > 0) {
      response.status(200).json(products[0]);
    } else {
      response.status(404).json({ message: "not found" });
    }
  } catch (error) {
    response.status(500).json({ message: error });
  }
};
export const deleteAllProduct = async (request, response) => {
  let product;
  try {
    product = await Products.deleteOne();
  } catch (error) {
    response.status(500).json({ message: error });
  }
  if (!product) {
    response.status(404).json({ message: "Not found" });
  }
  response.status(204).json({ message: "resourse successfully deleted" });
};

export const updateOneProduct = async (request, response) => {
  let updatedData = request.body;

  try {
    await Products.deleteOne();
    await Products.insertMany(updatedData);
  } catch (error) {
    console.log("Error while inserting default data", error);
  }
};
