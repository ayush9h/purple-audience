import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
  avatar: {
    type: String,
    required: true,
    unique: true,
  },
  registerPassword: {
    type: String,
    required: true,
    unique: true,
  },
  registerEmail: {
    type: String,
    required: true,
  },
});

const registerModel = mongoose.model("registerModel", registerSchema);

export default registerModel;
