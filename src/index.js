import express from "express";
import dbConnect from "./config/database.js";
import TweetRepository from "./repository/tweet-repository.js";
import TweetService from "./services/tweet-service.js";

const app = express();

const PORT = 2800;

dbConnect();

app.get("/", (req,res) => {
    res.json({
        message: "Project Running Sucessfull !!"
    })
});

app.listen(PORT, async () => {
    console.log(`Server is running on PORT ${PORT}`);
    // const repo = new TweetService();
    // repo.create({
        //     content: "Hello #Shubham it is Your Second First, #fun #SJ #boss"
        // });
    // console.log(data);
})