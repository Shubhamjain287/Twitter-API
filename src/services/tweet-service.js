import {HashtagRepository, TweetRepository} from "../repository/index.js";

class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag) => tag.substr(1).toLowerCase());

        const tweet = await this.tweetRepository.create(data);
        const alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        const titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);

        const newHashtags = tags.filter((tag) => !titleOfPresentTags.includes(tag)).map((tag) => {
            return {
                title: tag, tweets: [tweet.id]
            }
        });

        await this.hashtagRepository.bulkCreate(newHashtags);

        alreadyPresentTags.forEach((tag) => {
            console.log(tag);
            tag.tweets.push(tweet.id);
            tag.save();
        });

        return tweet;
    }

}

export default TweetService;