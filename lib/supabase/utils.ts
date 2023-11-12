"use server";
import bcrypt from "bcrypt";


export async function createHashPassword(password: string) {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log("🔴 Error for hashed password", error);
        throw error;
    }
}