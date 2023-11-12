import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

if (!process.env.NEXT_PUBLIC_SUPABASE_DATABASE_URL) {
  console.log("🔴 Cannot find database url");
}

const client = postgres(
  process.env.NEXT_PUBLIC_SUPABASE_DATABASE_URL as string,
  { max: 1 }
);
export const database = drizzle(client, { schema });

export const migrateDatabase = async () => {
  try {
    console.log("🚀 Migrating database...");
    await migrate(database, { migrationsFolder: "migrations" });
    console.log("✅ Database migrated");
  } catch (error) {
    console.log("🔴 Error migrating database", error);
  }
};
