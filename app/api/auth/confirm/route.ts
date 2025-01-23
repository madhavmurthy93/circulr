import { confirmEmail } from "@/services/supabase/auth";
import { type EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";
  console.log(next);

  try {
    if (!token_hash || !type) {
      throw new Error("Invalid token or type");
    }
    await confirmEmail({ token_hash, type });
    return NextResponse.redirect(new URL(next, request.url));
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/error", request.url));
  }
}
