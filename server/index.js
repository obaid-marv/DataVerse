// server.js
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
import messageRoutes from "./routes/message.js"; 
import cors from "cors";
import http from "http";
import initSocket from "./config/socket.js";

dotenv.config();

const app = express();

// Create the HTTP server
const server = http.createServer(app);

// Initialize Socket.IO with the server
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

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/dataset", datasetRoute);
app.use("/api/learning/course", courseRoute);
app.use("/api/learning/lecture", lectureRoute);
app.use("/api/learning/quiz", quizRoute);
app.use("/api/messages", messageRoutes); 

// Health Check Route
app.get("/", (req, res) => {
  res.send("Hello API");
});

// Start the server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  connectdb();
  console.log(`Server running on port ${PORT}`);
});
