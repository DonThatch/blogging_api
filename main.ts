import express from "express";
import "jsr:@std/dotenv/load";
import "./src/config/db.config.ts";
import { loggerMiddleware } from "./src/middlewares/logger.middleware.ts";
import userRouter from "./src/routes/user.route.ts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(loggerMiddleware);

app.use("/user", userRouter);

const PORT = Deno.env.get("APP_PORT") ?? 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
