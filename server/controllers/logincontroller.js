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

    // If user exists, check if the loginEmail is already in loginModel
    const loginEntryExists = await loginModel.findOne({ loginEmail });

    if (!loginEntryExists) {
      // If the login email is not in loginModel, save it
      const newRegEntry = new loginModel({
        loginEmail,
      });
      await newRegEntry.save();
      res.status(201).json({ message: "Data saved to MongoDB" });
    } else {
      res.status(200).json({ message: "User already logged in" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save data" });
  }
};
