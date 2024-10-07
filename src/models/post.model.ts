import { Schema, model } from "mongoose";

const postSchema = new Schema({
    title: String,
    content: String,
    author: String,
    tags: [String],
    createDate: { type: Date, default: Date.now },
});

export const Post = model("Post", postSchema);