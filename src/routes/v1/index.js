import express from "express";
import { createComment } from "../../controllers/comment-controllers.js";
import { toggleLike } from "../../controllers/like-controllers.js";
import { createTweet, getTweet } from "../../controllers/tweet-controllers.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.get("/tweet/:id", getTweet);

router.post("/like/toggle", toggleLike);

router.post("/comments", createComment);

export default router;
