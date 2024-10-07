import mongoose from 'npm:mongoose';
import {BDD_URL} from "./env.config.ts";
mongoose
    .connect(BDD_URL)
    .then(() => { console.log("Connected to MongoDB"); })
    .catch((error) => {
        console.error(error);
        Deno.exit(1);
    });

export const db = mongoose.connection;
