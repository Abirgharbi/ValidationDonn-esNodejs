import express from "express";
import { createEvent } from "../controller/event.js";

const router = express.Router();

router.post("/", createEvent);

export default router;
