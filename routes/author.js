import express from "express";
import { addAuthor } from "./../controller/author.js";

const router = express.Router();

//routes
router.post("/", addAuthor);

export default router;
