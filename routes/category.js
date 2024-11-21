import express from "express";
import { addCategory } from "../controller/category.js";

const router = express.Router();

//routes
router.post("/", addCategory);

export default router;
