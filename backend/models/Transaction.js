import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    productId: Number,
    title: String,
    description: String,
    price: Number,
    category: String,
    sold: Boolean,
    dateOfSale: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;