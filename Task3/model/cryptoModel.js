import mongoose from 'mongoose';


const cryptoPriceSchema = new mongoose.Schema({
    coin: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});


const CryptoPrice = mongoose.model('CryptoPrice', cryptoPriceSchema);

export default CryptoPrice;
