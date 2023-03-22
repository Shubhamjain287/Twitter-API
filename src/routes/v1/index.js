import express from "express";
import { login, signUp } from "../../controllers/auth-controller.js";
import { createComment } from "../../controllers/comment-controllers.js";
import { toggleLike } from "../../controllers/like-controllers.js";
import { createTweet, getTweet } from "../../controllers/tweet-controllers.js";
import { authenticate } from "../../middlewares/authentication.js";

const router = express.Router();

router.post("/tweets", authenticate ,createTweet);
router.get("/tweet/:id", getTweet);

router.post("/like/toggle", toggleLike);

router.post("/comments", createComment);

router.post("/signup", signUp);
router.post("/login", login);

export default router;
