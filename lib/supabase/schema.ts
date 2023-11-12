import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey().notNull(),
    email: text('email').unique().notNull(),
    password: text('password').notNull(),
    address: text('address'),
    createdAt: timestamp('created_at', {
        withTimezone: true,
        mode: 'string',
    }),
    updatedAt: timestamp('updated_at', {
        withTimezone: true,
        mode: 'string',
    }),
    username: text('username').notNull(),
})
