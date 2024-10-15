import type { Metadata } from "next";
import { Raleway } from "@next/font/google";
// import { Roboto } from "@next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  // display: "swap",
});

export const metadata: Metadata = {
  title: "Small Business Promotion",
  description: "Landing page for promoting a small business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <body
        className="h-full flex bg-gray-800 flex-col"
        // className="{raleway.className}"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white flex flex-col justify-center items-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
