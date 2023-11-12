import { pgTable, uuid, timestamp } from "drizzle-orm/pg-core";

export const workspaces = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string',
    })
})