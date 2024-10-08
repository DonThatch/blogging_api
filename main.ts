import express from "express";
import "jsr:@std/dotenv/load";
import "./src/config/db.config.ts";
import { loggerMiddleware } from "./src/middlewares/logger.middleware.ts";
import {PORT} from "./src/config/env.config.ts";
import "./src/config/db.config.ts";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const app = express();

const swaggerSpec = swaggerJsDoc({
  definition:{
    openapi: "3.0.0",
    info: {
      title: "Blogify API",
      version: "0.0.1",
      description: "A simple Express Library API"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["swagger.yaml"]
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(loggerMiddleware);

import postRouter from './src/routes/post.route.ts';
app.use('/post',postRouter);

import commentRouter  from "./src/routes/comment.route.ts";
app.use("/comment", commentRouter);

import userRouter from "./src/routes/user.route.ts";
app.use("/user", userRouter);

import likeRouter from "./src/routes/like.route.ts";
app.use("/like", likeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

