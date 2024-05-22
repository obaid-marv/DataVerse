

import express from "express";
import { getAllDatasets, uploadDataset } from "../controllers/dataset.js";

const router = express.Router();

router.post("/upload", uploadDataset);
router.get("/getAll", getAllDatasets);


export default router;