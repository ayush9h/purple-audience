import express from "express";
import { submitRegister } from "../controllers/registercontroller.js";

const registerRouter = express.Router();

registerRouter.post("/registerSubmit", submitRegister);

export default registerRouter;
