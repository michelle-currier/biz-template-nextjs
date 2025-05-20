"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Cards from "@/components/Cards";
import Carousel2 from "@/components/Carousel";

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
// const images = [
//   "./../images/hero-image.jpg",
//   "./../images/demo2.jpg",
//   "./../images/drainageDemo.jpg",
// ];
export default function About() {
  return (
    <div className="bg-gray-800 text-white flex flex-col">
      <div className="justify-start items-center p-6">
        <h2 className="text-4xl font-bold">About</h2>
        <Carousel2 images={images}></Carousel2>
      </div>
      <div className="justify-start items-center p-6">
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
