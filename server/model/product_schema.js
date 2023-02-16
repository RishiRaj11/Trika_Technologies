import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
  products:[
    {
        id: {
            type: Number,
            require: true,
           
          },
        title: {
            type: String,
            require: true,
            trim: true,
          },
          discription: {
            type: String,
            require: true,
            trim: true,
          },
          price: {
            type: Number,
            require: true,
            
          },
          discountPercentage: {
            type: Number,
            require: true,
           
          },
          rating: {
            type: Number,
            require: true,
            
          },
          stock: {
            type: Number,
            require: true,
           
          },
          brand: {
            type: String,
            require: true,
            trim: true,
          },
          category: {
            type: String,
            require: true,
            trim: true,
          },
          thumbnail: {
            type: String,
            require: true,
            trim: true,
          },
          images: [String]
    }
  ],

     total: {
            type: Number,
            require: true,
           
          },
          skip: {
            type: Number,
            require: true,
           
          },
          number: {
            type: Number,
            require: true,
            
          },

});

const products = mongoose.model("products", productSchema);
export default products;
