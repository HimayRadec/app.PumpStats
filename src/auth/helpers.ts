"use server";
/*
Created by: Himay on  05/24/2024
description: This is the server side helper functions for authentication
*/
import { signIn as naSignIn, signOut as naSignOut } from ".";

export async function signIn() {
   await naSignIn()
}

export async function signOut() {
   await naSignOut()
}