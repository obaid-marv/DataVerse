
import { createQuiz, getAllQuiz, getQuiz } from "../../controllers/learning/quiz.js";
import { verifyUser } from "../../utils/verifyToken.js";

import express from "express";

const router = express.Router(); 

router.post("/create", verifyUser, createQuiz);
router.get("/:quizId", verifyUser, getQuiz);
router.get("/all", verifyUser, getAllQuiz);




export default router;