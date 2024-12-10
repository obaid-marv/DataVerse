
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";
import courseRoute from "./routes/learning/course.js";
import lectureRoute from "./routes/learning/lecture.js";
import quizRoute from "./routes/learning/quiz.js";
import datasetRoute from "./routes/dataset.js";
import messageRoutes from "./routes/community/message.js"; 
import newsRoutes from "./routes/news.js";
import companyRoutes from "./routes/company.js";
import postRoutes from "./routes/community/post.js";
import connectionRoutes from "./routes/community/connection.js";
import discussionRoutes from "./routes/discussion/discussion.js";
import jobsRoutes from "./routes/job.js";


import cors from "cors";
import http from "http";
import initSocket from "./config/socket.js";

dotenv.config();

const app = express();

const server = http.createServer(app);

initSocket(server);

// MongoDB Connection
const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); 
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB Disconnected");
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176"], 
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/dataset", datasetRoute);
app.use("/api/learning/course", courseRoute);
app.use("/api/learning/lecture", lectureRoute);
app.use("/api/learning/quiz", quizRoute);
app.use("/api/messages", messageRoutes); 
app.use("/api/news", newsRoutes); 
app.use("/api/company", companyRoutes);
app.use("/api/post", postRoutes); 
app.use("/api/discussion", discussionRoutes);
app.use("/api/connection", connectionRoutes); 
app.use("/api/jobs", jobsRoutes); 



app.get("/", (req, res) => {
  res.send("Hello API");
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  connectdb();
  console.log(`Server running on port ${PORT}`);
});
