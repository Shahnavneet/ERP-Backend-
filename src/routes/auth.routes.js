import { Router } from "express";
import { registerUser ,login } from "../controllers/index.js";

export const authRoutes = Router();
authRoutes.post("/register", registerUser);
authRoutes.post("/login", login);
