import express from "express";
import { fetchUserByToken, fetchUserProgress, forgotPassword, login, register } from "../controllers/auth.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/me",verifyToken, fetchUserByToken)
router.get("/progress",verifyToken, fetchUserProgress)
router.post("/forgot-password", forgotPassword)


export default router;