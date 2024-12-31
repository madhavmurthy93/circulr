export const metadata = {
  title: "Sign in",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-full">
      <h2 className="text-3xl font-semibold">Sign in to your account</h2>
      <form>
        <button className="flex items-center gap-6 text-lg border px-10 py-4 font-medium rounded-full">
          <img
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            height="24"
            width="24"
          />
          <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
}
