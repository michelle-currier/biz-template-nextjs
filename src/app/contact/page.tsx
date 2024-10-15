"use client";

import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { TransitionButton } from "@/components/utils/TransitionButton";
// Define the shape of form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send email. Please try again later.");
      }
    } catch (error) {
      setStatus("Failed to send email. Please try again later.");
      console.error("Error:", error);
    }
  };

  // Handle input changes with proper event typing
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamically update the state for the correct field
    });
  };
  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-black dark:text-white mb-8">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium text-black dark:text-white"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-black dark:text-white"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium text-black dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-black dark:text-white"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm font-medium text-black dark:text-white"
          >
            Your Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-black dark:text-white"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-medium text-black dark:text-white"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="mt-2 p-3 border border-gray-300 dark:border-zinc-700 rounded-md dark:bg-black dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black p-3 rounded-md font-bold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p
          className={`mt-6 text-sm text-center ${
            status.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}

      <div className="mt-12 text-center">
        <p className="text-sm text-black dark:text-white">
          Or, send us an email directly at{" "}
          <a
            href="mailto:mcurrierdesigns@gmail.com"
            className="text-blue-600 dark:text-teal-300 underline"
          >
            mcurrierdesigns@gmail.com
          </a>
        </p>
        <p>
          <TransitionButton href="/">
            <button className="mt-8 bg-white text-teal-600 font-semibold py-2 px-4 rounded-full inline-flex items-center">
              Back to home
              <ArrowLeftIcon className="w-5 h-5 ml-2" />
            </button>
          </TransitionButton>
        </p>
      </div>
    </section>
  );
}
