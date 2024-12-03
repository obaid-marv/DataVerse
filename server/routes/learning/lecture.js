
import { createLecture, deleteLecture, getLecture, lectureCompleted } from "../../controllers/learning/lecture.js";
import { verifyToken, verifyUser } from "../../utils/verifyToken.js";

import express from "express";

const router = express.Router();

router.get("/:lectureId", verifyUser, getLecture);
// router.post("/create", verifyUser, createLecture);
router.post("/create", createLecture);
router.post("/completed/:courseId/:lectureId", verifyUser, lectureCompleted);
router.delete("/:courseId/del/:lectureId", verifyToken, deleteLecture)




export default router;