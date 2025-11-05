import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const productSchema = new mongoose.Schema({
    id: { type: Number },
    url: { type: String, required: true },         // image principale
    detailUrl: { type: String },                   // image zoomée ou secondaire
    title: {
        shortTitle: { type: String, required: true },
        longTitle: { type: String }
    },
    price: {
        mrp: { type: Number, required: true },     // prix d’origine
        cost: { type: Number, required: true },    // prix réduit
        discount: { type: String }                 // ex: "30% off"
    },
    quantity: { type: Number, default: 1 },
    description: { type: String },
    tagline: { type: String },
    category: { type: String },                    // ex: "Electronics", "Fashion"
}, { timestamps: true });                          // ajoute createdAt et updatedAt

autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, { model: 'product', field: 'id' });

const Product = mongoose.model('product', productSchema);

export default Product;
