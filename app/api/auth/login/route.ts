import { login } from "@/services/supabase/auth";

export async function POST(req: Request) {
  const formData = await req.formData();
  formData.forEach((value, key) => {
    console.log(key, value);
  });
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const data = await login({ email, password });
    console.log(data);
    return Response.json(data, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: `${(error as Error).message}` },
      { status: 400 }
    );
  }
}
