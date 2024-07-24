import express from "express";
import "dotenv/config";
import { errorHandler } from "./middlewares/index.js";
import {
  deptRoutes,
  authRoutes,
  roleRoutes,
  permissionRoutes,
} from "./routes/index.js";
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  // console.log(req.headers);
  next();
});

app.use("/api/dept", deptRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/role", roleRoutes);
app.use("/api/permission", permissionRoutes);

app.use(errorHandler);
export default app;
