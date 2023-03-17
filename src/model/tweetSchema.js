import mongoose from "mongoose";

const tweetSchema = mongoose.connect({
    name : {
        type: String,
        required : true
    },
    email : {
        type : String,
    },
    tweet : {
        type : String,
        required : true
    }
}, { timestamps: true } );
const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;