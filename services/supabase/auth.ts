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
