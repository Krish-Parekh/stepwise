import { users } from "@/migrations/schema";
import { InferSelectModel } from 'drizzle-orm';

export type User = InferSelectModel<typeof users>;