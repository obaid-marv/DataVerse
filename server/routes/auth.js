import express from "express";
import { fetchUserByToken, fetchUserProgress, forgotPassword, login, register, updateProfile } from "../controllers/auth.js";
import { verifyToken } from "../utils/verifyToken.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/me",verifyToken, fetchUserByToken)
router.get("/progress",verifyToken, fetchUserProgress)
router.post("/forgot-password", forgotPassword)
router.put("/update-profile", upload.single("profilePicture"),verifyToken , updateProfile)

export default router;