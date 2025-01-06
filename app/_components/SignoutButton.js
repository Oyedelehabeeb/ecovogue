"use client";

import { LogOut } from "lucide-react";
import { signOutAction } from "@/app/_lib/actions";

export default function SignoutButton() {
  function handleSignOut() {
    confirm("Are you sure you want to sign out?") && signOutAction();
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-sm text-customGreen px-4 py-2 rounded-md flex items-center gap-2"
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </button>
  );
}
