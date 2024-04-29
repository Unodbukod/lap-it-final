import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google'
import { Toaster } from "sonner";

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
})


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lap It Solutions",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {poppins_init.variable}>
        <main className="relative overflow-hidden ">
        <Toaster position="top-center" richColors />
        {children}
        </main>
      </body>
    </html>
  );
}
