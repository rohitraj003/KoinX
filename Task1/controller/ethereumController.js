import ethereumData from "../model/ethereumModel.js";
import fetch from "node-fetch";

const apiKey = "CG-foLf1zMjneEHrFqUH15F33L8";
const ethereum_url = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&x_cg_demo_api_key=${apiKey}`;

export const addethereumData = async(req,res) => {
    const fetchRes = await fetch(ethereum_url);
    const data = await fetchRes.json();

    const usd_curr_price = Number(data["ethereum"].usd);
    const usd_market_cap = Number(data["ethereum"].usd_market_cap);
    const usd_24h_change = Number(data["ethereum"].usd_24h_change);

    try{
    
        const currData = new ethereumData({
            usd_curr_price,
            usd_market_cap,
            usd_24h_change
        })

        await currData.save();
        // res.status(200).json({msg:"ethereum data is added"});
        
    } catch(err){
        // res.status(400).json({msg:"error:" + err.message});
    }
};

setInterval(addethereumData,2*60*60*1000);

addethereumData();