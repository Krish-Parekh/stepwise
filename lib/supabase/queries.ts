"use server";
import { database } from "./database";
import { users } from "@/migrations/schema";
import { User } from "./supabase.types";

export const createUser = async (user: User) => {
  try {
    const response = await database.insert(users).values(user);
    return response;
  } catch (error) {
    throw error;
  }
};
