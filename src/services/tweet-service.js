import HashtagRepository from "../repository/hastag-repository.js";
import TweetRepository from "../repository/tweet-repository.js"

class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag) => tag.substr(1));
        // console.log(tags);

        const tweet = await this.tweetRepository.create(data);
        const alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        const titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);

        // console.log(titleOfPresentTags);
        console.log(alreadyPresentTags);

        const newHashtags = tags.filter((tag) => !titleOfPresentTags.includes(tag)).map((tag) => {
            return {
                title: tag, tweets: [tweet.id]
            }
        });

        // console.log(newHashtags);

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