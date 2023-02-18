import {Router} from 'express';
import { getAllProducts,deleteAllProduct ,updateOneProduct} from '../Controller/product_controller.js';
const router=Router();

router.get("/products",getAllProducts);
router.delete("/products",deleteAllProduct);
router.post("/products",updateOneProduct);


export default router;

