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
    validate: {
      validator: function (value) {
        return value.length >= 6 && /\d/.test(value);
      },
      message:
        "Password must be at least 6 characters long and contain at least one number",
    },
  },
  registerEmail: {
    type: String,
    required: true,
  },
});

const registerModel = mongoose.model("registerModel", registerSchema);

export default registerModel;
