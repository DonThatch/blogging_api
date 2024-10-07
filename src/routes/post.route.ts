import express from 'express';
import { createPost, getPostsById, modifyPost } from '../controllers/post.controller.ts';

const postRouter = express.Router();

postRouter.post('/', createPost);
postRouter.get('/:id', getPostsById);
postRouter.put('/:id', modifyPost);

export default postRouter;