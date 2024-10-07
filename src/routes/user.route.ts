import express from "express";

import {createUser, getAllUsers, getUserById, login} from "../controllers/user.controller.ts";
import {authenticateJWT} from "../middlewares/auth.middleware.ts";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", authenticateJWT, getUserById);

userRouter.post("/register", createUser);
userRouter.post("/login", login);

export default userRouter;
