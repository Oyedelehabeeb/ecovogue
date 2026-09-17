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
      className="header-action"
      aria-label="Sign out"
    >
      <LogOut className="h-4 w-4" />
      <span className="sr-only">Sign out</span>
    </button>
  );
}
