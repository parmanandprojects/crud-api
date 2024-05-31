import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      delete_status: {
        type: Boolean,
        default:false
      },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("user", userSchema);

export {UserModel}
