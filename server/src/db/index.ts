// drizzle
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// drizzle setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
// drizzle instance
export const db = drizzle({ client: pool });
