import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import newsletterrouter from "./routes/newsletterroutes.js";
import registerRouter from "./routes/registerroutes.js";
import loginRouter from "./routes/loginroutes.js";
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/purple-audience-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the newsletterRoutes for routing
app.post("/submit", newsletterrouter);
app.post("/registerSubmit", registerRouter);
app.post("/loginSubmit", loginRouter);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
