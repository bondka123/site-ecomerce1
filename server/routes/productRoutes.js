import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory
} from '../controller/product-controller.js';

const router = express.Router();

// 🔍 Lire tous les produits
router.get('/products', getProducts);

// 🔍 Lire un produit par ID
router.get('/product/:id', getProductById);

// 📂 Lire les produits par catégorie
router.get('/products/category/:category', getProductsByCategory);

// 🆕 Ajouter un produit
router.post('/product', createProduct);

// ✏️ Modifier un produit
router.put('/product/:id', updateProduct);

// ❌ Supprimer un produit
router.delete('/product/:id', deleteProduct);

export default router;
