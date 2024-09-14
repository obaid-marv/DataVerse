
import { createLecture, lectureCompleted } from "../../controllers/learning/lecture.js";
import { verifyUser } from "../../utils/verifyToken.js";

import express from "express";

const router = express.Router();

router.post("/create", verifyUser, createLecture);
router.post("/completed/:courseId/:lectureId", verifyUser, lectureCompleted);



export default router;