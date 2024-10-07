import express from "express";

import { createUser, getAllUsers, getUserById } from "../controllers/user.controller.ts";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);

userRouter.post("/", createUser);

export default userRouter;
