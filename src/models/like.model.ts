import mongoose from "npm:mongoose";

import { Post } from "./post.model.ts";

const LikeModel = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Post,
        required: true
    },
    likeNumber: {
        type: Number,
        required: true
    },

});

export const Like = mongoose.model("Like", LikeModel);