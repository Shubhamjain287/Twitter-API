import Tweet from "../model/tweetSchema.js";
import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService{

    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){
        try {
            if(modelType == 'Tweet'){
                var likeable = await this.tweetRepository.get(modelId); 
            }
            else if(modelType == 'Comment'){
                
            }
            else{
                throw new Error("Unknown Model Type !!");
            }

            const exist = await this.likeRepository.findByUserAndLikable({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });

            if(exist){
                likeable.likes.pull(exist.id);
                await likeable.save();
                await exist.deleteOne();
                var isAdded = false;
            }
            else{
                const newLike = await this.likeRepository.create({
                    user: userId,
                    onModel: modelType,
                    likeable: modelId
                });

                likeable.likes.push(newLike);
                await likeable.save();
                var isAdded = true;
            }

            return isAdded;

        } catch (error) {
            console.log(error);
        }
    }

}

export default LikeService;