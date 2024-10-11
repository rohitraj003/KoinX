import fetch from "node-fetch";

const apiKey = process.env.apiKey;


export const getData = async(req,res) => {
    const coinName = req.body.coin;
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&x_cg_demo_api_key=${apiKey}`;
    try{
        // console.log(req);
        
        console.log(coinName);
        
        const fetchRes = await fetch(url);
        const data = await fetchRes.json();
        
        console.log(data);
        
        res.status(200).json({msg:"data is fetched"});
    } catch(err){
        res.status(400).json({msg:"Error:" + err.message});
    }
}
