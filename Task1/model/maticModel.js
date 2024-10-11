import mongoose from "mongoose";

const maticSchema = new mongoose.Schema({
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

const maticData = mongoose.model("maticInfo",maticSchema)
export default maticData;