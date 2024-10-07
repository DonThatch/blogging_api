import express from 'express';
import { createPost, getPostsById, modifyPost,getCommentsByPostId } from '../controllers/post.controller.ts';

const postRouter = express.Router();

postRouter.post('/', createPost);
postRouter.get('/:id', getPostsById);
postRouter.get('/:id/comments', getCommentsByPostId);
postRouter.put('/:id', modifyPost);

export default postRouter;