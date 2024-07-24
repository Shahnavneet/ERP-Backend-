import { Role } from "../models/index.js";
import { CustomError } from "../utils/index.js";

export const createRole = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new CustomError("Please provide role name", 400);
  }
  const role = await Role.create({ name });

  res.status(201).json({
    success: true,
    message: "Role created successfully",
    role,
  });
};

export const getRoles = async (req, res) => {
  const roles = await Role.find();

  res.status(201).json({
    success: true,
    data: roles,
  });
};

export const updateRole = async (req, res) => {
  const { name } = req.body;
  const { roleId } = req.params;
  if (!name) {
    throw new CustomError("Please Enter a valid Role", 400);
  }
  const existingRole = await Role.findById(roleId);

  const result = await Role.findByIdAndUpdate(roleId, { name })
    .status(200)
    .json({ success: true, message: "Role Updates successfully" });
};
