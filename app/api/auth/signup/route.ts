import { signup } from "@/services/supabase/auth";

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const data = await signup({ name, email, password });
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
