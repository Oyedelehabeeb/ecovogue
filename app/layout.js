"use client";

import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { CartProvider } from "./_components/CartContext";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Toaster position="top-right" className="text-customGreen" />

        {!isLoginPage && (
          <header className="w-full py-2 fixed top-0 left-0 bg-white z-50">
            <Header />
          </header>
        )}

        <main className={`flex-grow w-full ${!isLoginPage ? "pt-[60px]" : ""}`}>
          <CartProvider>{children}</CartProvider>
        </main>

        {!isLoginPage && (
          <footer className="w-full">
            <Footer />
          </footer>
        )}
      </body>
    </html>
  );
}
