import mongoose, { Mongoose } from "mongoose";

const tweetSchema = new mongoose.Schema({
    content : {
        type: String,
        require: true,
        max : [250, "Tweet cannot be More than 250 Characters"]
    }
}, { timestamps: true } );

const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;