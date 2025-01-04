"use client";

import Image from "next/image";

export default function UserDetails({ session }) {
  if (!session?.user) return null;

  return (
    <div className="flex gap-4 items-center">
      {session.user.image && (
        <div className="relative h-8 w-8 rounded-full overflow-hidden">
          <Image
            src={session.user.image}
            alt="Profile picture"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      <span className="text-sm text-customGreen">{session.user.name}</span>
    </div>
  );
}
