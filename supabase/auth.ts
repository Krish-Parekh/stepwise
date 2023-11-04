import { supabase } from "./index";

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

export async function signUp(email: string, password: string) {
    try {
        const { data, error } = await auth.signUp({ email, password });
        if (error) throw error;
        return data;
    } catch (error) {
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
    } catch (error) {
        throw error;
    }
}