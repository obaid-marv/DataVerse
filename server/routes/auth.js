import express from "express";
import { addPhone, addTitleAndSkills, deleteUserById, fetchUserByToken, fetchUserProgress, forgotPassword, getAllUsers, getUserById, login, register, updateProfile } from "../controllers/auth.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.patch("/:id/phone",addPhone);
router.patch("/:id/title",addTitleAndSkills);
router.get("/me",verifyToken, fetchUserByToken)
router.get("/progress",verifyToken, fetchUserProgress)
// router.get("/get-all-users",verifyToken, getAllUsers)
router.get("/get-all-users", getAllUsers)
router.post("/forgot-password", forgotPassword)
router.put("/update-profile", upload.single("profilePicture"),verifyToken , updateProfile)
router.delete("/:id", deleteUserById);
router.get("/:id", getUserById);

export default router;