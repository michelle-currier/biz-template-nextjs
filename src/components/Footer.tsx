import React from "react";

const Footer = () => (
  <div className="mx-auto justify-between max-w-7xl w-full">
    <hr className="w-full border-gray-600 mt-6" />
    <div className="w-full flex justify-between items-end px-6 p-4">
      <div className="w-1/2">
        <ul className="text-sm">
          <li>
            Built by{" "}
            <a
              href="https://mcurrier.com"
              target="_blank"
              className="text-teal-300 border-teal-300 border-b "
            >
              m.currier designs
            </a>
          </li>
          <li>
            Framework with&nbsp;
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="text-teal-300 border-teal-300 border-b"
            >
              NextJS
            </a>
          </li>
          <li>
            Using styles from&nbsp;
            <a
              href="https://tailwind.build/classes"
              target="_blank"
              className="text-teal-300 border-teal-300 border-b"
            >
              Tailwind
            </a>
          </li>
          <li>
            Transitions with&nbsp;
            <a
              href="https://hover.dev"
              target="_blank"
              className="text-teal-300 border-teal-300 border-b"
            >
              Hover.dev
            </a>
          </li>
          <li>
            Deploying from github with&nbsp;
            <a
              href="https://vercel.com/"
              target="_blank"
              className="text-teal-300 border-teal-300 border-b"
            >
              Vercel app
            </a>
          </li>
        </ul>
      </div>
      <div className="w-1/2 text-right">
        <p className="text-sm">©DF Construction Services 2024</p>
      </div>
    </div>
  </div>
);

export default Footer;
