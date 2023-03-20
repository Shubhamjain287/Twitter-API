import { CommentRepository } from "../repository/index.js";

class CommentService{

    constructor(){
        this.commentRepository = new CommentRepository();
    }

}

export default CommentService;

