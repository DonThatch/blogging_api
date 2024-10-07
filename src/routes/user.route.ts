import express from "express";

import {createUser, getAllUsers, getUserById, login} from "../controllers/user.controller.ts";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

userRouter.post("/register", createUser);
userRouter.post("/login", login);

export default userRouter;
