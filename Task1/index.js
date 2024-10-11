import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cryptoRoute from "./route/cryptoRoute.js";

dotenv.config();
const app = express();


const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri)
.then(()=>{
    console.log("DB connected");
})
.catch((err) => {
    console.log("error: "+err.message);
})

app.use(express.json());


app.use("/",cryptoRoute);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})