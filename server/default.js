import {data} from './data.js'
import Products from "./model/product_schema.js";

const defaultData = async () => {
    try {
        await Products.insertMany(data);
        console.log("Inserted successfully");
    } catch (error) {
        console.log("Error while inserting default data", error);
    }
}

export default defaultData;