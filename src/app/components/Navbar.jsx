"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/login");
    const json = await res.json();
    if (json["status"] === true) {
      router.replace("/");
    }
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-indigo-500 text-3xl">Dashboard</h1>
          <Link href="/">Home</Link>
        </div>

        <div>
          <button
            onClick={handleLogout}
            className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
