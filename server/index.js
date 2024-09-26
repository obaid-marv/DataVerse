import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import authRoute from './routes/auth.js';
import courseRoute from './routes/learning/course.js';
import lectureRoute from './routes/learning/lecture.js';
import quizRoute from './routes/learning/quiz.js';
import datasetRoute from './routes/dataset.js';

import cors from 'cors';

const app = express();
dotenv.config();



const connectdb = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log('Connected to MongoDB');
    } catch (error) {
      throw error;
    }
  };

mongoose.connection.on("disconnected", ()=>{
  console.log("mongodb Disconnected");
})


app.use(cors({
  origin: 'http://localhost:5173', // Replace with your client URL
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

// Routes
// app.use('/api/users', userRoutes);
app.use('/api/auth', authRoute);
app.use('/api/dataset', datasetRoute);
app.use('/api/learning/course', courseRoute);
app.use('/api/learning/lecture', lectureRoute);
app.use('/api/learning/quiz', quizRoute);
app.get('/', (req,res)=>{
    res.send("Hello Api");
})

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    connectdb();  
    console.log(`server running on ${PORT}`);  
  });

