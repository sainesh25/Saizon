import Product from '../models/product.js';

const getAllProduct = async (req, res) => {
    try {
        const data = await Product.find();
        res.send({
            status: 200,
            message: 'Products fetched successfully!',
            data,
        });

    } catch (err) {
        console.log(err)
    }
}

const addProduct = async (req, res) => {
    try {
        const data = await Product.create({...req.body});
        res.send({
            status: 200,
            message: 'Product Added Successfully',
            data
        })
        console.log('hello in add product');
        
    } catch (err) {
        console.log(err);
    }
}

export default { addProduct, getAllProduct }