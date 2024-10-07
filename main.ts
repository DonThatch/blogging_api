import express from 'express';
import "jsr:@std/dotenv/load";
import "./src/config/db.config.ts";
const app = express();

app.use(express.json());

import postRouter from './src/routes/post.route.ts';
app.use('/post',postRouter);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});