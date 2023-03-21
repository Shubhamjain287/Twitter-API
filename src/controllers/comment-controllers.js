import { CommentService } from "../services/index.js";

const commentService = new CommentService();

export const createComment = async (req,res) => {
    try {
        const response = await commentService.createComment(req.query.modelId, req.query.modelType,req.body.userId,req.body.content);

        return res.status(200).json({
            success: true,
            data: response,
            message: "Created a new Comment Successfully !!",
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {},
            message: "Internal Server Error",
            error: error
        });
    }
}