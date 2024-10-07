import mongoose from "npm:mongoose";

mongoose
    .connect(Deno.env.get("MONGO_CONNECTION_STRING") ?? "")
    .then(() => { console.log("Connected to MongoDB"); })
    .catch((error) => {
        console.error(error);
        Deno.exit(1);
    });

export const db = mongoose.connection;
