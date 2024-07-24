import { Router } from "express";
import {
  createDept,
  getDept,
  deleteDepts,
  updateDept,
} from "../controllers/department.controller.js";
import { catchAsync } from "../middlewares/HandleErrors.js";
export const deptRoutes = Router();

deptRoutes.post("/create-dept", catchAsync(createDept));
deptRoutes.get("/get-depts", catchAsync(getDept));
deptRoutes.delete("/delete-dept/:deptId", catchAsync(deleteDepts));
deptRoutes.put("/update-Dept/:deptId", catchAsync(updateDept));
