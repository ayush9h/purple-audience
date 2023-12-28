import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
  loginEmail: {
    type: String,
    required: true,
    unique: true,
  },
});

const loginModel = mongoose.model("loginModel", loginSchema);

export default loginModel;
