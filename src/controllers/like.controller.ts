import {Request, Response} from "express";
import { Like } from "../models/like.model.ts";


export const like = async (req: Request, res: Response) => {
    try {
        const like = await Like.findOne({ postId: req.params.id });
        if (like) {
            like.likeNumber += 1;
        } else {
            const newLike = new Like({
                postId: req.params.id,
                likeNumber: 1,
            });
            await newLike.save();
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const unlike = async (req: Request, res: Response) => {
    try {
        const like = await Like.findOne({ postId: req.params.id });
        if (like) {
            like.likeNumber -= 1;
        } else {
            res.status(404).json({ message: "Like not found" });
        }
    }catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
