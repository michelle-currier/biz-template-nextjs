import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { TransitionButton } from "@/components/utils/TransitionButton";

export default function Hero() {
  return (
    <section className="bg-[url('./../images/hero-image.jpg')] bg-cover w-full">
      <div className="max-w-7xl mx-auto py-12 px-6 flex flex-col">
        <h1 className="text-5xl font-bold drop-shadow-sm">
          Welcome to Our Business!
        </h1>
        <h2 className="text-3xl font-bold my-10 drop-shadow-sm">
          This is the template! Add your tagline
        </h2>
        <p className="text-lg mb-4 drop-shadow-sm">
          We help you achieve your goals with our services.
        </p>
        <div className="flex flex-row">
          <TransitionButton href="/contact">
            <button className="mt-8 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full inline-flex items-center">
              Get in Touch
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </TransitionButton>
          <TransitionButton href="/about">
            <button className="mt-8 ml-8 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full inline-flex items-center">
              About
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </TransitionButton>
        </div>
      </div>
    </section>
  );
}
