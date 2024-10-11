import express from 'express';
import { getDeviation } from '../controller/cryptoController.js';

const router = express.Router();


router.get('/deviation', getDeviation);

export default router;
