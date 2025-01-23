"use client";

import { useAppDispatch } from "@/redux/hooks";
import { setSession } from "@/redux/slices/sessionSlice";
import createClient from "@/services/supabase/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FormField from "../form/FormField";
import Input from "../form/Input";
import Button from "../ui/Button";

type FormValues = {
  email: string;
  password: string;
};

function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { register, reset, formState, getValues, handleSubmit } =
    useForm<FormValues>();
  const { errors } = formState;

  async function onSubmit(data: FormValues) {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: formData,
        headers: {
          enctype: "multipart/form-data",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(`${error.error}`);
      }
      console.log("Logged in successfully: ", await response.json());
      toast.success("Logged in successfully! Redirecting...");
      const supabase = createClient();
      const {
        data: { session },
      } = await supabase.auth.getSession();
      dispatch(setSession(session));
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error logging in: ", error);
      toast.error(`Error logging in ${error}`);
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold md:text-2xl">Login</h1>
      <form
        className="md:w-128 flex w-64 flex-col gap-4 sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField label="Email" error={errors?.email?.message?.toString()}>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormField>
        <FormField
          label="Password"
          error={errors?.password?.message?.toString()}
        >
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
        </FormField>
        <Button>Login</Button>
      </form>
      <p className="space-x-2 text-sm">
        <span>Don&apos;t have an account?</span>
        <a href="/auth/signup" className="text-primary-700 underline">
          Sign up
        </a>
      </p>
    </div>
  );
}

export default LoginForm;
