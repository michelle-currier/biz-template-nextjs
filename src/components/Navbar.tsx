// import Link from "next/link";
import { TransitionLink } from "@/components/utils/TransitionLink";

export default function Navbar() {
  return (
    <div className="flex mx-auto justify-between max-w-7xl w-full">
      <div className="p-6 text-white">logo</div>
      <nav className="flex justify-end">
        <ul className="flex space-x-4 m-6">
          <li>
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/about">About</TransitionLink>
          </li>
          <li>
            <TransitionLink href="/contact">Contact</TransitionLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
