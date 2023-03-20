import Comment from "../model/commentSchema.js";
import CrudRepository from "./crud-repository.js";

class CommentRepository extends CrudRepository{

    constructor(){
        super(Comment);
    }

}

export default CommentRepository;