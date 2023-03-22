import express from "express";
import passport from "passport";
import dbConnect from "./config/database.js";

import apiRoutes from "./routes/index.js";

import {LikeRepository, UserRepository , TweetRepository} from "./repository/index.js";
import LikeService from "./services/like-service.js";
import { passportAuth } from "./config/jwt-middleware.js";

const app = express();
const PORT = 2800;

dbConnect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

app.use("/api", apiRoutes);

app.get("/", (req,res) => {
    res.json({
        message: "Project Running Sucessfull !!"
    })
});

async function test (){
    const u = new UserRepository();
    // const user = await u.create({
    //   name : "Shubham",
    //   email: "Shubham@gmail.com",
    //   password: "123456"  
    // });
    const users = await u.getAll();

    const t = new TweetRepository();
    const tweet = await t.getAll(0,10);

    const l = new LikeService();
    // await l.toggleLike(tweet[0].id, 'Tweet', user.id);
    await l.toggleLike(tweet[0].id, 'Tweet', users[0].id);

}

app.listen(PORT, async () => {
    console.log(`Server is running on PORT ${PORT}`);
    // test();
})