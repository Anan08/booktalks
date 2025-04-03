import express from "express";
import AccountModel from "../model/Account";

const router = express.Router();

router.get("/register/:id", async (req, res) => {
    try {
        const accounts = await AccountModel.find();
        res.json(accounts).redirect("/books");
    } catch (error) {
        res.status(500).json({error : error.message});
        
    } 
});