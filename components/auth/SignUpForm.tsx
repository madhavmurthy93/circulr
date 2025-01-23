"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import FormField from "../form/FormField";
import Input from "../form/Input";
import Button from "../ui/Button";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

function SignUpForm() {
  const router = useRouter();
  const { register, reset, formState, getValues, handleSubmit } =
    useForm<FormValues>();
  const { errors } = formState;

  async function onSubmit(data: FormValues) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);

    try {
      const response = await fetch("/api/auth/signup", {
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
      console.log("Signed up successfully: ", await response.json());
      toast.success("Signed up successfully! Redirecting...");
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (error) {
      console.error("Error signing up: ", error);
      toast.error(`Error signiing up ${error}`);
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold md:text-2xl">Sign Up</h1>
      <form
        className="md:w-128 flex w-64 flex-col gap-4 sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormField label="Name" error={errors?.name?.message?.toString()}>
          <Input
            type="text"
            id="name"
            {...register("name", { required: "Thie field is required" })}
          />
        </FormField>
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
        <Button>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
