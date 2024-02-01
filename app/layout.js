import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux-provider";
import "antd/dist/antd.min.css";
import Navbar from "@/components/navbar";
import Image from "next/image";
import bgPattern from "@/public/images/bgPattern.png";
import bgOverlay from "@/public/images/bgOverlay.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Agglo Exchange Blogs",
  description: "Agglo Exchange Blogs App",
  icons: {
    icon: [{ url: "/favicon/favicon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <div className="relative min-h-screen">
            <div className="fixed inset-0 w-full h-full ">
              <Image
                draggable={false}
                src={bgPattern}
                alt="BG Image"
                className="w-full h-full select-none"
              />
            </div>
            <div className="fixed inset-0 z-10 w-full h-full backdrop-blur-[150px]">
              <Image
                draggable={false}
                src={bgOverlay}
                alt="BG Image"
                className="w-full h-full select-none"
              />
            </div>
            <div className="relative z-10">
              <Navbar />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
