import { Post } from "../models/post.model.ts";
import { Request, Response } from "express";

interface CustomError extends Error {
    status?: number;
    message: string;
}

export const createPost = async (req: Request, res: Response): Promise<void> => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        tags: req.body.tags,
    });
    console.log(post);
    try {
        await post.save();
        res.status(200).send(`Post ${post.title} created successfully`);
    } catch (e) {
        const error = e as CustomError;
        res.status(error.status || 500).send(error.message);
    }
};

export const getPostsById = async (req: Request, res: Response): Promise<void> => {
    const post = await Post.findById(req.params.id);
    try {
        if (!post) {
            throw { status: 404, message: "Post not found" };
        }
        res.status(200).send(post);
    }catch (e) {
        const error = e as CustomError;
        res.status(error.status || 500).send(error.message);
    }
};

export const modifyPost = async (req: Request, res: Response): Promise<void> => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body);
    try {
        if (!post) {
            throw { status: 404, message: "Post not found" };
        }

    } catch (e) {
        const error = e as CustomError;
        res.status(error.status || 500).send(error.message);
    }
    res.status(200).send(`Post modified successfully`);
};