import { TweetService } from "../services/index.js";

const tweetService = new TweetService();

export const createTweet = async (req,res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success : true,
            data : response,
            message: "Successfully Created a New Tweet",
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            data : {},
            message: "Something Went Wrong",
            error : error
        })
    }
}

export const getTweet = async (req,res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success : true,
            data : response,
            message: "Successfully Fetched a Tweet",
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            data : {},
            message: "Something Went Wrong",
            error : error
        })
    }
}