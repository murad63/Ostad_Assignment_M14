"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (fieldName, value) => {
    setFormValue((prev) => {
      return {
        ...prev,
        [fieldName]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValue.message) {
      return;
    }
    setIsLoading(true);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(formValue),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      if (result["status" === "success"]) {
        alert("message send successfully ");
      }
    } catch (error) {
      alert("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="relative  bg-white mt-5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 ">
        <div className="relative px-6 pb-20 pt-8 sm:pt-16 lg:static lg:px-8 lg:py-24">
          <div className="mx-auto w-7xl lg:mx-0 ">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-white ring-1 ring-gray-900/10 ">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
             Ping me
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="px-6  pt-20  lg:px-8 ">
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className={`${
                    isLoading ? "bg-indigo-500" : "bg-indigo-600"
                  } rounded-md  px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  disabled={isLoading}
                >
                  {isLoading ? "Sending... " : "Send message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
