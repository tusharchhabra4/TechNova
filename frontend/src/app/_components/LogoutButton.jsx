"use client";

import { useRouter } from "next/navigation";

import { logoutUser } from "@/actions/logout";
import Button from "./ui/Button";

export default function LogoutButton({
  button,
}) {
  const router = useRouter();

  async function handleLogout() {
    await logoutUser();

    router.push("/login");
    router.refresh();
  }

  return (
    <Button
      data={button}
      onClick={handleLogout}
    >
      {button?.text || "Logout"}
    </Button>
  );
}