import express from "express";
import { submitLogin } from "../controllers/logincontroller.js";
const loginRouter = express.Router();

loginRouter.post("/loginSubmit", submitLogin);

export default loginRouter;
