import registerModel from "../models/registerSchema.js";

export const submitRegister = async (req, res) => {
  try {
    const { avatar, registerPassword, registerEmail } = req.body;
    const newRegEntry = new registerModel({
      avatar,
      registerPassword,
      registerEmail,
    });
    await newRegEntry.save();

    res.status(201).json({ message: "Data saved to mongodb" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save data" });
  }
};
