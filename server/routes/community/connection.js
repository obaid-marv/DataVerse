import express from "express";
import { verifyToken } from "../../utils/verifyToken.js";
import { acceptFriendRequest, getFriendRequests, rejectFriendRequest, sendFriendRequest } from "../../controllers/community/community.js";

const router = express.Router();

router.get("/requests", verifyToken, getFriendRequests);
router.post("/:receiverId/request", verifyToken, sendFriendRequest)
router.patch("/:requestId/accept", verifyToken, acceptFriendRequest)
router.patch("/:requestId/reject", verifyToken, rejectFriendRequest)

export default router;