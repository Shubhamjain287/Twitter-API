import Tweet from "../model/tweetSchema.js";

class TweetRepository {

    constructor(){
        
    }

    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id,data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(id,data,{new: true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id){
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try {
            const tweets = await Tweet.find();
            return tweets;
        } catch (error) {
            console.log(error);
        }
    }

}

export default TweetRepository;