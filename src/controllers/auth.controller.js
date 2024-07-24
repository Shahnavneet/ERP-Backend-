import { CustomError } from "../utils/index.js";
import { User, Role, Department, Permission } from "../models/index.js";
export const registerUser = (req, res, next) => {};

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const createAdmin = async (email, password) => {
  const role = await Role.create({ name: "admin" });
  const dept = await Department.create({ name: "Management" });
  const hashPassword = await hashPassword(password);
  const permissions = await Permission.find({}).select("_id");
  const user = await User.create({
    email,
    password: hashPassword,
    role: role_id,
    deptId: dept_id,
    UserPermissions: [],
  });
  return user;
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError("Please fill all the fields", 400);
  }

  const existingUser = await User.find();
  if (existingUser.length === 0) {
    await createAdmin(email, password);
  }
};
