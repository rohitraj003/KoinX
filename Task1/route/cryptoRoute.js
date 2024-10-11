import express from "express";
import { addbitcoinData } from "../controller/bitcoinController.js";
import { addmaticData } from "../controller/maticController.js";
import { addethereumData } from "../controller/ethereumController.js";

const router = express.Router();

router.get("/bitcoin",addbitcoinData);
router.get("/matic",addmaticData);
router.get("/ethereum",addethereumData);

export default router;