"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Cards from "@/components/Cards";

export default function About() {
  return (
    <div className="bg-gray-800 text-white flex flex-col">
      <div className="justify-start items-center p-6">
        <h2 className="text-4xl font-bold">About</h2>
        <Cards />

        <p>
          <a
            href="/"
            className="mt-8 bg-white text-teal-600 font-semibold py-2 px-4 rounded-full inline-flex items-center"
          >
            Back to home
            <ArrowLeftIcon className="w-5 h-5 ml-2" />
          </a>
        </p>
      </div>
    </div>
  );
}
