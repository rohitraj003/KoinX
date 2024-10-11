import CryptoPrice from '../model/cryptoModel.js';
import { std } from 'mathjs';  


export const getDeviation = async (req, res) => {
    const coinName = req.body.coin;

    if (!coinName) {
        return res.status(400).json({ msg: "Coin name is required" });
    }

    try {
        
        const prices = await CryptoPrice.find({ coin: coinName })
            .sort({ timestamp: -1 })  
            .limit(100)                
            .select('price');           

        
        if (prices.length === 0) {
            return res.status(404).json({ msg: `No records found for ${coinName}` });
        }

        
        const priceValues = prices.map(record => record.price);

        
        const deviation = std(priceValues);

        
        return res.status(200).json({
            deviation: deviation.toFixed(2)
        });

    } catch (err) {
        
        return res.status(500).json({ msg: "Server error", error: err.message });
    }
};
