import { getCurrentUser } from "@/services/supabase/auth";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const user = await getCurrentUser();
  return (
    <h2 className="text-xl font-semibold md:text-2xl">
      Welcome, {user?.user_metadata.name}
    </h2>
  );
}
