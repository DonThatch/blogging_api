import mongoose from "npm:mongoose";
import { Post } from "./post.model.ts";
import { User } from "./user.model.ts";
const Comment = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Post,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});
export const commentSchema = mongoose.model("Comment", Comment);