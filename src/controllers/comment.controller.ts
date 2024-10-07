import { commentSchema } from "../models/comment.model.ts";
import { Request, Response } from "express";
import { CustomError } from "../config/env.config.ts";
import jwt from "jsonwebtoken";

export const createComment = async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).send("Access denied. No token provided.");
    }

    try {
        const secretKey = Deno.env.get('JWT_SECRET_KEY') || "your_secret_key";
        const decoded = jwt.verify(token, secretKey) as { _id: string };

        const comment = new commentSchema({
            postId: req.body.postId,
            userId: decoded._id,
            content: req.body.content,
        });

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


