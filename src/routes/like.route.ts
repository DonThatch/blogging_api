import express from 'express';

import {like, unlike} from "../controllers/like.controller.ts";

const likeRouter = express.Router();

likeRouter.put('/:id', like);
likeRouter.delete('/:id', unlike);

export default likeRouter;