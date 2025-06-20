import express from 'express';
import {
  products,
  getProductByID,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controllers/product.Controller.js';

const router = express.Router();

router.get('/', products);
router.get('/:id', getProductByID);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
