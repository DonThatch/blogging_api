import express from 'express';

import {like, unlike} from "../controllers/like.controller.ts";

const likeRouter = express.Router();

likeRouter.put('/:id', like);
likeRouter.put('/unlike/:id', unlike);

export default likeRouter;
