import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cryptoRoutes from "./route/crptoRoute";

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri)
.then(() => console.log("DB connected"))
.catch((err) => console.log("error:" + err.message))

app.use(express.json());
app.use(bodyParser.json());
app.use('/api', cryptoRoutes);

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})