import express from "express";
import { deleteUserById, fetchUserByToken, fetchUserProgress, forgotPassword, getAllUsers, login, register, updateProfile } from "../controllers/auth.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/me",verifyToken, fetchUserByToken)
router.get("/progress",verifyToken, fetchUserProgress)
router.get("/get-all-users",verifyToken, getAllUsers)
router.post("/forgot-password", forgotPassword)
router.put("/update-profile", upload.single("profilePicture"),verifyToken , updateProfile)
router.delete("/:id", verifyAdmin, deleteUserById);
export default router;