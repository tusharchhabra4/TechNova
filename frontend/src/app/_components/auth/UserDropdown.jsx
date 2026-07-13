"use client";

import Link from "next/link";

import UserAvatar from "./UserAvatar";
import LogoutButton from "@/app/_components/LogoutButton";

export default function UserDropdown({ user, menu }) {
  const dropdown = user ? menu?.authenticatedLinks?.[0] : menu?.guestLinks?.[0];

  const links = dropdown?.Navdropdown || [];

  return (
    <div className="relative group">
      {/* Avatar */}

      <button className="flex items-center" type="button">
        <UserAvatar user={user} showUsername={false} />
      </button>

      {/* Dropdown */}

      <div
        className="absolute right-0 top-full pt-2 hidden group-hover:block min-w-[240px] rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden z-50"
      >
        {user && menu?.showUsername && (
          <div className="border-b p-4">
            <p className="font-semibold">{user.username}</p>

            <p className="text-sm text-slate-500 break-all">{user.email}</p>
          </div>
        )}

        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="block px-4 py-3 hover:bg-slate-100 transition-colors"
          >
            {link.label}
          </Link>
        ))}

        {user && (
          <>
            <div className="border-t" />

            <div className="p-2">
              <LogoutButton />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
