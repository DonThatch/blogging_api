import "jsr:@std/dotenv/load";

const PORT = Deno.env.get("APP_PORT") ?? 3000;
const BDD_URL = Deno.env.get("BDD_URL") ?? "mongodb://localhost:27017";

interface CustomError extends Error {
    status?: number;
    message: string;
}

export { PORT, BDD_URL };
export type { CustomError };
