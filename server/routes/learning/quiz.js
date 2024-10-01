
import { createQuiz, getAllQuiz, getQuiz, updateQuiz } from "../../controllers/learning/quiz.js";
import { verifyUser } from "../../utils/verifyToken.js";

import express from "express";

const router = express.Router(); 

router.post("/create", verifyUser, createQuiz);
router.get("/all", verifyUser, getAllQuiz);
router.get("/:quizId", verifyUser, getQuiz);
router.put("/:quizId", verifyUser, updateQuiz);



export default router;