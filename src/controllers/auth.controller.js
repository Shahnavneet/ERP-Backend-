import { CustomError } from "../utils/index.js";
import { User, Role, Department, Permission } from "../models/index.js";
import { generate } from "generate-password";

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

const checkEmail = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    return true;
  }
  return false;
};

const passwordGenerator = () => {
  return generate({
    length: 12,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeSimilarCharacters: true,
  });
};

export const registerUser = async (req, res, next) => {
  const { emaail, role, deptId } = req.body;

  if (!emmail || !role || !deptId) {
    throw new CustomError("Please fill all the feilds", 400);
  }

  //1)check wheather the email already exist or not
  const isUserExist = await checkEmail(email);

  if (!isUserExist) {
    throw new CustomError("User with the email already Exist", 400);
  }

  //2)generate password
  const password = passwordGenerator();
  console.log(password);

  //3)Password hash
  const hashedPassword = await hashPassword(password);

  //4)insert

  const user = new User();
  user.email = email;
  user.password = hashedPassword;
  user.role = role;
  user.deptId = deptId;

  const result = await user.save();

  res.status(201).json({
    success: true,
    message: "User created Sucessfully",
    user: result,
  });
};
