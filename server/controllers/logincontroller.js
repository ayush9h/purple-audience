import loginModel from "../models/loginSchema.js";
import registerModel from "../models/registerSchema.js";

export const submitLogin = async (req, res) => {
  try {
    const { loginEmail } = req.body;

    // Check if the loginEmail exists in the registerModel
    const userExists = await registerModel.findOne({
      registerEmail: loginEmail,
    });

    if (!userExists) {
      return res.status(401).json({ message: "User does not exist" });
    }

    // If user exists, save the loginEmail in the loginModel
    const newRegEntry = new loginModel({
      loginEmail,
    });
    await newRegEntry.save();

    res.status(201).json({ message: "Data saved to MongoDB" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save data" });
  }
};
