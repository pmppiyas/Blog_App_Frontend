"use client";
import { FieldValues, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { toast } from "sonner";
import { login } from '@/actions/auth';
import { signIn } from "next-auth/react"

// type LoginFormValues = {
//   email: string;
//   password: string;
// };

export default function LoginForm() {
  const form = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FieldValues) => {
    try {
      const res = await login(values);

      if (res.success) {
        toast.success("User Logged in Successfully");
      } else {
        toast.error(res.message || "User Login Failed");
      }

    } catch (err) {
      console.error(err);
      toast.error("There was an error logging in");
    }
  };

  const handleSocialLogin = async (provider: "google" | "github") => {
    await signIn(provider, {
      callbackUrl: "/"
    })
  };

  return (

    <div className="space-y-6 w-full max-w-md p-8 rounded-lg shadow-md bg-accent">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center">Login</h2>

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-2">
            Login
          </Button>

          <div className="flex items-center justify-center space-x-2">
            <div className="h-px w-16 bg-gray-300" />
            <span className="text-sm text-gray-500">or continue with</span>
            <div className="h-px w-16 bg-gray-300" />
          </div>
        </form>
      </Form>
      {/* Social Login Buttons */}
      <div className="flex flex-col gap-3 mt-4">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/",
            })
          }
        >
          {/* Google */}
          <Image
            src="https://img.icons8.com/color/24/google-logo.png"
            alt="Google"
            className="w-5 h-5"
            width={20}
            height={20}
          />
          Login with Google
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2"
          onClick={() => handleSocialLogin("github")}
        >
          {/* GitHub */}
          <Image
            src="https://img.icons8.com/ios-glyphs/24/github.png"
            alt="GitHub"
            className="w-5 h-5"
            width={20}
            height={20}
          />
          Login with GitHub
        </Button>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        Don’t have an account?{" "}
        <Link href="/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </p>

    </div >
  );
}
