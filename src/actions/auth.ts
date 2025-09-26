"use server";

import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch("http://localhost:5000/api/v1/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log("From actions", res);

  return await res.json();
};

export const login = async (data: FieldValues) => {
  const res = await fetch("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};
