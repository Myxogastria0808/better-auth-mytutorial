import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  out: "./drizzle",
  schema: "./dist/src/db/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
