"use client";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import Link from "next/link";
import React from "react";
import SignInForm from '@/components/module/auth/SignInForm';

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const form = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const togglePassword = () => setPasswordVisible((prev) => !prev);

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register data:", data);
  };

  return (
    <div className=' flex items-center justify-center my-auto'>
      <SignInForm />
    </div>
  );
}