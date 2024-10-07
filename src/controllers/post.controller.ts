import { Post } from "../models/post.model.ts";
import { Request, Response } from "express";
import { CustomError } from "../config/env.config.ts";
import {commentSchema} from "../models/comment.model.ts";
import {Like} from "../models/like.model.ts";

export const createPost = async (req: Request, res: Response) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        tags: req.body.tags,
    });
    const like = new Like({
        postId: post._id,
        likeNumber: 0
    })

    try {
        await post.save();
        await like.save();
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

export const deletePost = async (req: Request, res: Response): Promise<void> => {
    const post = await Post.findByIdAndDelete(req.params.id);
    try {
        if (!post) {
            throw { status: 404, message: "Post not found" };
        }
    } catch (e) {
        const error = e as CustomError;
        res.status(error.status || 500).send(error.message);
    }
    res.status(200).send(`Post deleted successfully`);
}

export const getCommentsByPostId = async (req: Request, res: Response): Promise<void> => {
    console.log("post/:id/comments")
    const comments = await commentSchema.find({postId: req.params.id});
    try {
        if (!comments) {
            throw {status: 404, message: "Comments not found"};
        }
        res.status(200).send(comments);
    } catch (e) {
        const error = e as CustomError;
        res.status(error.status || 500).send(error.message);
    }
}
export const getLikeFromPost = async (req: Request, res: Response) => {
    try {
        const like = await Like.find({postId: req.params.postId});
        if (like) {
            res.json(like);
        } else {
            res.status(404).json({ error: "Like not found" });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}