import express from "express";
import { submitEmail } from "../controllers/newslettercontroller.js";

const newsletterrouter = express.Router();

newsletterrouter.post("/submit", submitEmail);

export default newsletterrouter;
