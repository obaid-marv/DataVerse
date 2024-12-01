
import express from "express";
import { addComment, createPost, deletePost, getAllPosts, getPostById, incrementUpVotes, updatePost } from "../../controllers/community/post.js";
import { verifyToken } from "../../utils/verifyToken.js";

const router = express.Router();

router.post("/create", verifyToken, createPost);
router.patch("/:id/upvote", verifyToken, incrementUpVotes);
router.get("/all", verifyToken, getAllPosts);
router.get("/:id", verifyToken, getPostById);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);
router.post("/:id/comments", verifyToken, addComment);

export default router;
