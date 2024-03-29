import { LikeService } from "../services/index.js";

const likeService = new LikeService();

export const toggleLike = async (req,res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType,req.body.userId);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Toggle Like Successfully !!",
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