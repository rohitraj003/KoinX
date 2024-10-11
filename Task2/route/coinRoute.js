import express from "express";
import { getData } from "../controller/getCoin.js"

const router = express.Router();

router.get("/stats",getData);

export default router;