// src/controllers/companyController.js
import Company from "../models/Company.js";
import { createError } from "../utils/error.js";

export const createCompany = async (req, res, next) => {
    try {
        const newCompany = new Company({
            name: req.body.name,
            employees: req.body.employees,
            description: req.body.description,
            owner: req.body.owner,
            profileUrl: req.body.profileUrl,
            websiteUrl: req.body.websiteUrl,
        });
        await newCompany.save();
        res.status(200).json("Company has been created successfully");
    } catch (err) {
        next(err);
    }
};

export const getAllCompanies = async (req, res, next) => {
    try {
        const companies = await Company.find();
        if (!companies || companies.length === 0) {
            return next(createError(404, "No companies found"));
        }
        res.status(200).json(companies);
    } catch (err) {
        next(err);
    }
};

export const getCompanyById = async (req, res, next) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return next(createError(404, "Company not found"));
        }
        res.status(200).json(company);
    } catch (err) {
        next(err);
    }
};

export const updateCompany = async (req, res, next) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!updatedCompany) {
            return next(createError(404, "Company not found for update"));
        }
        res.status(200).json("Company has been updated successfully");
    } catch (err) {
        next(err);
    }
};

export const deleteCompany = async (req, res, next) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deletedCompany) {
            return next(createError(404, "Company not found for deletion"));
        }
        res.status(200).json("Company has been deleted successfully");
    } catch (err) {
        next(err);
    }
};
