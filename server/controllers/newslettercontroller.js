import subscriberModel from "../models/newsletterSchema.js";

export const submitEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const newEntry = new subscriberModel({ email });
    await newEntry.save();

    res.status(201).json({ message: "Data saved to MongoDB" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data to MongoDB" });
  }
};
