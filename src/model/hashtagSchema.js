import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        }
    ]
}, { timestamps: true });

const Hasttag = mongoose.model('Hasttag', hashtagSchema);
export default HastTag;