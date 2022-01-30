import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// routes:
import taskRoutes from './routes/tasks.js';

const app = express();

// use:
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/tasks', taskRoutes);

// constants:
dotenv.config();
const CONNECTION_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 4000;

// database connection:
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log('Database Connection is successful.');
      console.log(`Server running on ${PORT}...`);
    })
  )
  .catch((error) => console.log(error.message));
