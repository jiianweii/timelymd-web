"use client";

import { useAuthStore, User, UserRole } from "@/stores/useAuthStore";
import { Box, Button, Checkbox, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const signIn = useAuthStore((state) => state.setUser);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      remember: false,
      user: {
        email: "",
        password: "",
      },
    },
  });

  function handleSignIn() {
    let role: UserRole = "OWNER";
    const email = form.values.user.email;
    email === "jianweipeh@gmail.com"
      ? (role = "OWNER")
      : email === "itsjianweii@gmail.com"
        ? (role = "DOCTOR")
        : (role = "STAFF");

    const user: User = {
      id: 1,
      name: "Dr. Jian Wei",
      email: email,
      profileUrl: "",
      role: role,
    };

    signIn(user);
  }

  const icon = showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />;

  return (
    <Box mx="auto" w={"100%"} className="flex flex-col gap-y-2">
      <TextInput
        label="Email Address"
        key={form.key("user.email")}
        type="email"
        {...form.getInputProps("user.email")}
      />
      <TextInput
        label="Password"
        mt="md"
        key={form.key("user.password")}
        {...form.getInputProps("user.password")}
        rightSectionPointerEvents="none"
        rightSection={icon}
        type="password"
      />
      <div className="flex justify-between">
        <Checkbox
          label="Remember me?"
          mt="sm"
          key={form.key("remember")}
          {...form.getInputProps("remember", { type: "checkbox" })}
        />
        <Link href="/reset-password" className="self-center mt-2.5">
          <p className="text-xs text-blue-600 font-semibold">Forget Password</p>
        </Link>
      </div>
      <Button w="100%" className="mt-2 h-12!" onClick={handleSignIn}>
        Sign In
      </Button>
    </Box>
  );
}
