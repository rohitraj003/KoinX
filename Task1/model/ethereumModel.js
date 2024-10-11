import mongoose from "mongoose";

const ethereumSchema = new mongoose.Schema({
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

const ethereumData = mongoose.model("ethereumInfo",ethereumSchema);
export default ethereumData;