import { Schema, model } from "mongoose";
import {User} from "./user.model.ts";

const postSchema : Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    tags: {
        type:[String],
        required: true
    },
    createDate: { type: Date, default: Date.now }
});

export const Post = model("Post", postSchema);