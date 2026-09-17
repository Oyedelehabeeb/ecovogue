"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import { CartProvider } from "@/app/_components/CartContext";
// import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

function LayoutContent({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <>
      <Toaster position="top-right" className="text-customGreen" />
      {!isLoginPage && (
        <header className="w-full fixed top-0 left-0 z-50">
          <Header />
        </header>
      )}
      <main className={`flex-grow w-full ${!isLoginPage ? "pt-[72px] lg:pt-[124px]" : ""}`}>
        <CartProvider>{children}</CartProvider>
      </main>
      {!isLoginPage && (
        <footer className="w-full">
          <Footer />
        </footer>
      )}
    </>
  );
}

export default LayoutContent;
