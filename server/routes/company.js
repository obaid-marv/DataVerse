import express from "express";
import { verifyToken } from "../utils/verifyToken.js";
import {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
} from "../controllers/company.js";

const router = express.Router();

router.post("/create", verifyToken, createCompany);
router.get("/all", verifyToken, getAllCompanies);
router.get("/:id",  verifyToken, getCompanyById);
router.put("/:id", verifyToken, updateCompany);
router.delete("/:id", verifyToken, deleteCompany);

export default router;
