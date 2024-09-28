import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import { getPreviousMessages } from "../controllers/message.js";

const router = express.Router();

router.get("/get-prev-msg/:userId", verifyToken, getPreviousMessages);


export default router;