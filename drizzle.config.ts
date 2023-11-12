import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.NEXT_PUBLIC_SUPABASE_DATABASE_URL) {
    console.log('🔴 Cannot find database url')
}

export default {
    schema: "./lib/supabase/schema.ts",
    out: "./migrations",
    driver: "pg",
    dbCredentials: {
        connectionString: process.env.NEXT_PUBLIC_SUPABASE_DATABASE_URL || '',
    }
} satisfies Config;