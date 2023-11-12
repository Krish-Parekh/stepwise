import { supabase } from "./index";
import { User } from "@/lib/supabase/supabase.types";
import { createUser } from "@/lib/supabase/queries";
import { v4 } from "uuid";
import { createHashPassword } from "./utils";

export const auth = supabase.auth;

export async function signIn(email: string, password: string) {
    try {
        const { data, error } = await auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data;
    } catch (error) {
        throw error;
    }
}

export async function signUp(username: string, email: string, password: string) {
    try {
        const { data, error } = await auth.signUp({ email, password });
        const hashedPassword = await createHashPassword(password);
        const user: User = {
            id: v4(),
            username,
            email,
            password: hashedPassword,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            address: "",
        };
        await createUser(user);
        if (error) throw error;
        return data;
    } catch (error) {
        console.log("Error ")
        throw error;
    }
}

export async function signOut() {
    try {
        const { error } = await auth.signOut();
        if (error) throw error;
    } catch (error) {
        throw error;
    }
}

export async function resetPassword(email: string) {
    try {
        const { error } = await auth.resetPasswordForEmail(email);
        if (error) throw error;
        return true;
    } catch (error) {
        throw error;
    }
}