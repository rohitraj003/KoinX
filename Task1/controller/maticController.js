import fetch from "node-fetch";
import maticData from "../model/maticModel.js"

const apiKey = "CG-foLf1zMjneEHrFqUH15F33L8";
const matic_url = `https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&x_cg_demo_api_key=${apiKey}`;

export const addmaticData = async(req,res) => {
    const fetchRes = await fetch(matic_url);
    const data = await fetchRes.json();

    // console.log(data);

    const usd_curr_price = Number(data["matic-network"].usd);
    const usd_market_cap = Number(data["matic-network"].usd_market_cap);
    const usd_24h_change = Number(data["matic-network"].usd_24h_change);

    try{
        const currData = new maticData({
            usd_curr_price,
            usd_market_cap,
            usd_24h_change
        })
        await currData.save();
        // res.status(200).json({msg:"Matic data added"});
    } catch(err){
        // res.status(400).json({msg:"Error: "+err.message });
    }
};

setInterval(addmaticData,2*60*60*1000);

addmaticData();