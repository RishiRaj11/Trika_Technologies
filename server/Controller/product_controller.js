import Products from "../model/product_schema.js"

export const getAllProducts=async( request,response)=>{
    try{
        const products= await Products.find({});
        if(products){
                response.status(200).json({products});
        }else{
            response.status(404).json({message:"not found"});
        }
    }catch(error){
          response.status(500).json({message:error});
    }
}