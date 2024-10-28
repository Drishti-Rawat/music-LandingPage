import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
     
      <body className={inter.className} >
        <div className="relative w-full flex items-center justify-center">
      <Navbar/>

        </div>
      {children}
      
      <div>
        <Footer/>
        </div></body>
    </html>
  );
}
