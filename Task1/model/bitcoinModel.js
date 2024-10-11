import mongoose from "mongoose";

const bitcoinSchema = new mongoose.Schema({
    usd_curr_price:{
        type:Number
    },
    usd_market_cap:{
        type:Number
    },
    usd_24h_change:{
        type:Number
    }
})

const bitcoinData = mongoose.model("bitcoinInfo",bitcoinSchema);
export default bitcoinData;