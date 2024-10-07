import express from "express";
import "jsr:@std/dotenv/load";
import "./src/config/db.config.ts";
import { loggerMiddleware } from "./src/middlewares/logger.middleware.ts";
import {PORT} from "./src/config/env.config.ts";
import "./src/config/db.config.ts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(loggerMiddleware);

import postRouter from './src/routes/post.route.ts';
app.use('/post',postRouter);

import commentRouter  from "./src/routes/comment.route.ts";
app.use("/comment", commentRouter);

import userRouter from "./src/routes/user.route.ts";
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
