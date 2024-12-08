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

// router.post("/create", verifyToken, createCompany);
router.post("/create", createCompany);
// router.get("/all", verifyToken, getAllCompanies);
router.get("/allCompanies", getAllCompanies);
router.get("/:id",  verifyToken, getCompanyById);
router.put("/:id", verifyToken, updateCompany);
// router.delete("/:id", verifyToken, deleteCompany);
router.delete("/:id", deleteCompany);

export default router;
