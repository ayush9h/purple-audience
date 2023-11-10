import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/newsletterdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const subscriberSchema = mongoose.model('subscriberSchema', {

  email: String,
});

app.post('/submit', async (req, res) => {
  try {
    const { email } = req.body;
    const newEntry = new subscriberSchema({ email });
    await newEntry.save();

    res.status(201).json({ message: 'Data saved to MongoDB' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data to MongoDB' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
