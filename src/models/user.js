import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: false },
    contact: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    deptId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    UserPermissions: {
      type: Schema.Types.ObjectId,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
