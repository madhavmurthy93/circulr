import { logout } from "@/services/supabase/auth";

export async function POST(req: Request) {
  try {
    await logout();
    return Response.json(
      { message: "Logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: `${(error as Error).message}` },
      { status: 500 }
    );
  }
}
