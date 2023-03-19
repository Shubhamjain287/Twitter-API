import Like from "../model/likeSchema.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
    
    constructor(){
        super(Like);
    }

    async findByUserAndLikable(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default LikeRepository;