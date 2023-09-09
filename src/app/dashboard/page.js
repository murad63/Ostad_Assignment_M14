import React from "react";
import Navbar from "../components/Navbar";
import { headers } from "next/headers";

export default function page() {
  return (
    <div className="container mx-auto space-y-6">
      <div className=" py-6 px-6  shadow-md">
        <Navbar />
      </div>
      <p>This is dashboard Page</p>
    </div>
  );
}
