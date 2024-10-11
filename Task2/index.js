import express from "express";
import dotenv from "dotenv";
import coinRoute from "./route/coinRoute.js";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());


app.use("/",coinRoute);

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})
