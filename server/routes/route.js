import {Router} from 'express';
import { getAllProducts } from '../Controller/product_controller.js';
const router=Router();

router.get("/products",getAllProducts);


export default router;

