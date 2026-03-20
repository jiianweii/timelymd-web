"use client";

import { useAuthStore } from "@/stores/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ROLE_REDIRECTS: Record<string, string> = {
  OWNER: "/dashboard/owner",
  DOCTOR: "/dashboard/doctor",
  STAFF: "/dashboard/staff",
};

export default function Page() {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }

    const redirectPath = ROLE_REDIRECTS[user.role];

    if (redirectPath) {
      router.replace(redirectPath);
    } else {
      router.replace("/login");
    }
  }, [user, router]);

  return null;
}
