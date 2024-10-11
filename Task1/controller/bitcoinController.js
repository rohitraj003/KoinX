import bitcoinData from "../model/bitcoinModel.js";
import fetch from "node-fetch";

const apiKey = "CG-foLf1zMjneEHrFqUH15F33L8";
const bitcoin_url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&x_cg_demo_api_key=${apiKey}`;


export const addbitcoinData = async(req,res) => {
    const fetchRes = await fetch(bitcoin_url)
    const data = await fetchRes.json();

    const usd_curr_price = Number(data.bitcoin.usd);
    const usd_market_cap = Number(data.bitcoin.usd_market_cap);
    const usd_24h_change = Number(data.bitcoin.usd_24h_change);
    // console.log(data);

    try{
        const currData = new bitcoinData({
            usd_curr_price,
            usd_market_cap,
            usd_24h_change
        })
        await currData.save();
        // res.status(200).json({msg:"bitcoin data is added"});
    } catch(err){
        // res.status(400).json({msg:"Error: "+err.message });
    }
};

setInterval(addbitcoinData,2*60*60*1000);

addbitcoinData();


