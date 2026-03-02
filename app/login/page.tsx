"use client";

import Logo from "@/components/common/Logo";
import LoginForm from "@/components/form/LoginForm";
import { useAuthStore, User } from "@/stores/useAuthStore";
import { Button } from "@mantine/core";
import {
  IconBrandApple,
  IconBrandGoogle,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
  const isAuth = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuth) redirect("/");
  }, [isAuth]);

  return (
    <div className="min-h-screen w-screen flex">
      <div className="flex flex-col flex-1 h-full p-4">
        {/* Logo on the left */}
        <div>
          <Logo />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-3/5 flex flex-col gap-y-6">
            <div className="text-center flex flex-col gap-y-5">
              <h1 className="font-bold text-4xl">Welcome Back</h1>
              <p className="text-gray-500">
                Enter your email and password to access to your clinic
                management dashboard
              </p>
            </div>
            <LoginForm />
            <div className="h-5 flex justify-center items-center relative">
              {/* Line */}
              <div className="w-full h-px bg-gray-200"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                <p className="text-gray-500">Or Using</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <Button
                variant="default"
                w={"100%"}
                h={"50"}
                leftSection={<IconBrandGoogleFilled size={14} />}
              >
                Google
              </Button>
              <Button
                variant="default"
                w={"100%"}
                h={"50"}
                leftSection={<IconBrandApple size={14} />}
              >
                Apple
              </Button>
            </div>

            <p className="text-center">
              Dont have an account?{" "}
              <Link href="/register" className="text-blue-600 font-semibold">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center bg-primary ">
        a
      </div>
    </div>
  );
}
