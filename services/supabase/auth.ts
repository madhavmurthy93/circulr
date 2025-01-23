import { EmailOtpType } from "@supabase/supabase-js";
import createClient from "./server";

export async function signup({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error) {
    console.error(error);
    throw error;
  }
  const { user } = data;

  if (user) {
    const { error: insertError } = await supabase
      .from("users")
      .insert([
        { id: user.id, email: user.email, name: user.user_metadata.name },
      ]);

    if (insertError) {
      console.error(insertError);
      throw insertError;
    }
  }

  return data;
}

export async function confirmEmail({
  token_hash,
  type,
}: {
  token_hash: string;
  type: EmailOtpType;
}) {
  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    type,
    token_hash,
  });

  if (error) {
    console.error(error);
    throw error;
  }
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error);
    throw error;
  }

  return data;
}

export async function logout() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error);
    throw error;
  }
}

export async function getCurrentUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error(error);
    throw error;
  }

  return user;
}
