import localFont from "next/font/local";
import { Raleway } from "@next/font/google";

const geistSansFont = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
  });
  const geistMonoFont = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
  });
  
  const ralewayFont = Raleway({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
  });

export const geistSans = geistSansFont.variable;
export const geistMono = geistMonoFont.variable;
export const raleway = ralewayFont.className;