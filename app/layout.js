import LayoutContent from "./_components/LayoutContent";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "@/app/_styles/globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: {
    template: "%s | Ecovogue",
    default: "Ecovogue — Considered fashion",
  },
  description:
    "EcoVogue is a sustainable fashion brand that offers stylish, eco-friendly clothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col ${sans.variable} ${display.variable}`}
      >
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
