import express from "express";
import dbConnect from "./config/database.js";
import TweetService from "./services/tweet-service.js";

const app = express();

const PORT = 2800;

dbConnect();

app.get("/", (req,res) => {
    res.json({
        message: "Project Running Sucessfull !!"
    })
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    const t = new TweetService();
    t.create({
        content: "Hello Shubham #how are #you here is #YOUR tweet with hashtags #SJ"
    })
})