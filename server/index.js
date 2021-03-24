import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';

import postsRoutes from './routes/posts.js';
import usersRoutes from './routes/users.js';

dotenv.config();

const app = express();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

// Database connection
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, console.log(`Server running on port: ${PORT}`.yellow.bold))
  )
  .catch((error) => console.log(error.message));

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes
app.use('/api/posts', postsRoutes);
app.use('/api/users', usersRoutes);
