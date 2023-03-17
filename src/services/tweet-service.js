import TweetRepository from "../repository/tweet-repository.js"

class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository();
    }

    async create(data){
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag) => tag.substr(1));
        console.log(tags);

        const tweet = this.tweetRepository.create(data);
        return tweet;
    }

}

export default TweetService;