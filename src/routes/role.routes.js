import { Router } from "express";
import {
  createRole,
  getRoles,
  updateRole,
} from "../controllers/index.js";
import { catchAsync } from "../middlewares/HandleErrors.js";
export const roleRoutes = Router();

roleRoutes.post("/create-role", catchAsync(createRole));
roleRoutes.get("/get-roles", catchAsync(getRoles));
roleRoutes.put("/update-roles", catchAsync(updateRole));

