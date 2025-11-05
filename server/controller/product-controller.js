import Product from '../model/productSchema.js';

// 🔍 GET all products
export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});
        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// 🔍 GET product by ID
export const getProductById = async (request, response) => {
    try {
        const product = await Product.findOne({ id: request.params.id });
        if (!product) {
            return response.status(404).json({ message: 'Product not found' });
        }
        response.status(200).json(product);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// 🆕 POST new product
export const createProduct = async (request, response) => {
    try {
        const newProduct = new Product(request.body);
        await newProduct.save();
        response.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// ✏️ UPDATE product by ID
export const updateProduct = async (request, response) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { id: request.params.id },
            request.body,
            { new: true }
        );
        if (!updatedProduct) {
            return response.status(404).json({ message: 'Product not found' });
        }
        response.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// ❌ DELETE product by ID
export const deleteProduct = async (request, response) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ id: request.params.id });
        if (!deletedProduct) {
            return response.status(404).json({ message: 'Product not found' });
        }
        response.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// 📂 GET products by category
export const getProductsByCategory = async (request, response) => {
    try {
        const products = await Product.find({ category: request.params.category });
        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};
