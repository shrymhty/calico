import productModel from "../models/productModel.js";
import fs from "fs";

// add product
const addProduct = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    const product = new productModel({
        name: req.body.name,
        description: req.body.description,  
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    });
    try {
        await product.save();
        res.json({success: true, message: "Product added successfully"});
    } catch (error) {
        res.json({success: false, message: "Error in adding product"});
        console.log(error);
    }
};

// display all products
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success: true, data: products});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error in fetching products"});
    }
};


// remove product
const removeProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id);
        fs.unlink(`uploads/${product.image}`, () => {});

        await productModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Product removed successfully"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error in removing product"});
    }
}

export {
    addProduct,
    getAllProducts,
    removeProduct
}