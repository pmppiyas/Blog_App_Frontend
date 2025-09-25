"use client"
import React from "react";
import Link from "next/link";
import LoginForm from '@/components/module/auth/LoginForm';

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className='min-h-screen flex items-center justify-center my-auto'>
      <LoginForm />
    </div>
  )
}

export default LoginPage;