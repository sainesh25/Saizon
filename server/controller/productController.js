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
        if (await Product.findOne({ ...req.body })) {
            res.send({
                message: 'Product Already exists',
            })
        } else {
            const data = await Product.create({ ...req.body });
            res.send({
                status: 200,
                message: 'Product Added Successfully',
                data
            })
        }
        // console.log('hello in add product');

    } catch (err) {
        console.log(err);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = req.query.id;
        const idFromDb = await Product.findOne({ _id: id });

        if (!id || !idFromDb) {
            res.status(400).json({
                message: 'ID provided is invalid'
            })
        } else {
            const data = await Product.findByIdAndDelete(id);
            res.status(200).json({
                message: 'Product Deleted Successfully',
            })
            console.log(idFromDb);
        }

    } catch (err) {
        console.log(err);

    }
}

export default { addProduct, getAllProduct, deleteProduct }