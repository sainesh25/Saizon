import express from 'express';
import product from '../controller/productController.js'
const productRouter = express.Router();

productRouter.post('/product/addProduct', product.addProduct);
productRouter.get('/product/getAllProduct', product.getAllProduct);
productRouter.delete('/product/deleteProduct', product.deleteProduct);
productRouter.put('/product/editProduct');


export default productRouter;