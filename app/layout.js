import LayoutContent from "./_components/LayoutContent";
import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Ecovogue",
    default: "Welcome | Ecovogue",
  },
  description:
    "EcoVogue is a sustainable fashion brand that offers stylish, eco-friendly clothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col bg-white ${inter.className}`}
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
