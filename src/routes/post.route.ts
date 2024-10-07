import express from 'express';
import { createPost, getPostsById, modifyPost,getCommentsByPostId, deletePost, getLikeFromPost } from '../controllers/post.controller.ts';

import { isAuthenticated } from "../middlewares/isAuth.middleware.ts";

const postRouter = express.Router();

postRouter.post('/', isAuthenticated, createPost);
postRouter.get('/:id', isAuthenticated, getPostsById);
postRouter.get('/:id/comments', isAuthenticated, getCommentsByPostId);
postRouter.put('/:id', isAuthenticated, modifyPost);
postRouter.delete('/:id', isAuthenticated, deletePost);
postRouter.get('/:id/like', isAuthenticated, getLikeFromPost);

export default postRouter;
