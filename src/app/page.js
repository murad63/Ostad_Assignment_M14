import Image from "next/image";
import Link from "next/link";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="isolate inline-flex rounded-md shadow-sm">
        <Link
          href="/login"
          className="relative inline-flex items-center rounded-l-md bg-cyan-400 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          replace
        >
          Sign In
        </Link>
        <Link
          href="/dashboard"
          className="relative -ml-px inline-flex items-center rounded-r-md bg-pink-400 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
          replace
        >
          Dashboard
        </Link>
      </div>
      <ContactForm />
    </main>
  );
}
