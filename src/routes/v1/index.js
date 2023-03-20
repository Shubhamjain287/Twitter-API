import express from "express";
import { toggleLike } from "../../controllers/like-controllers.js";
import { createTweet } from "../../controllers/tweet-controllers.js";

const router = express.Router();

router.post("/tweets", createTweet);

router.post("/like/toggle", toggleLike);

export default router;
