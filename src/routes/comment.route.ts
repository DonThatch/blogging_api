import express from 'express';
import { createComment, modifyComment, deleteComment } from '../controllers/comment.controller.ts';

const commentRouter = express.Router();

commentRouter.post('/', createComment);
commentRouter.put('/:id', modifyComment);
commentRouter.delete('/:id', deleteComment);

export default commentRouter;