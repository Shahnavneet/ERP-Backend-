import { Department } from "../models/index.js";
import { CustomError } from "../utils/index.js";
let departments = [
  { id: "D101", name: "Development" },
  { id: "D102", name: "HR" },
  { id: "D103", name: "Data Aanalytics" },
  { id: "D104", name: "Digital" },
];
export const createDept = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    throw new CustomError("Please Fill All Feilds", 400);
  }
  const department = await Department.create({ name });

  res.status(201).json({
    success: true,
    message: "Department created successfully",
  });
};

export const getDept = async (req, res, next) => {
  const departments = await Department.find();
  res.status(200).json({
    success: true,
    data: departments,
  });
};
export const deleteDepts = (req, res, next) => {
  const { deptId } = req.params;
  // const updatedDepts = department.filter((item) => {
  //   item.id != deptId;
  // });
  // departments = updatedDepts;

  const department = Department.findById(deptId);
  if (!department) {
    throw new CustomError("Department does not exist", 400);
  }

  const result = Department.findByIdAndDelete(deptId);

  res
    .status(200)
    .json({ success: true, message: "department deleted successfully" });
};

export const updateDept = async (req, res, next) => {
  const { deptId } = req.params;
  const { name } = req.body;
  if (!name || !deptId) {
    throw new CustomError("Please Fill All the fiels", 400);
  }
  const existingDept = await Department.findById(deptId);

  const result = await Department.findByIdAndUpdate(deptId, { name })
    .status(200)
    .json({ success: true, message: "department Updates successfully" });
};
