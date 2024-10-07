import { commentSchema } from "../models/comment.model.ts";
import { Request, Response } from "express";
import { CustomError } from "../config/env.config.ts";

export const createComment = async (req: Request, res: Response) => {
    const comment = new commentSchema({
        postId: req.body.postId,
        userId: req.body.userId,
        content: req.body.content,
    });
    try {
        await comment.save();
        res.status(200).send(`Comment created successfully`);
    } catch (e) {
        const error = e as CustomError;
        res.status(error.status || 500).send(error.message);
    }
};
export const modifyComment = async (req: Request, res: Response): Promise<void> => {
    const comment = await commentSchema.findByIdAndUpdate(req.param.id, req.body);
    try {
        if (!comment) {
            throw { status: 404, message: "Comment not found" };
        }
    } catch (e) {
        const error = e as CustomError;
        res.status(error.status || 500).send(error.message);
    }
}
export const deleteComment = async (req: Request, res: Response): Promise<void> => {
    const comment = await commentSchema.findByIdAndDelete(req.params.id);
    try {
        if (!comment) {
            throw {status: 404, message: "Comment not found"};
        }
        res.status(200).send(`Comment deleted successfully`);
    } catch (e) {
        const error = e as CustomError;
        res.status(error.status || 500).send(error.message);
    }
}


