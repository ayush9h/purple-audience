import mongoose from "mongoose";

const subscriberSchema = mongoose.Schema({
  email: String,
});

const subscriberModel = mongoose.model("subscriberModel", subscriberSchema);

export default subscriberModel;
