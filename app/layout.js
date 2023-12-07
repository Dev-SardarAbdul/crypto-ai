import { Balsamiq_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SnowFlakes from "@/components/snowFlakes";
import Footer from "@/components/footer";

const inter = Balsamiq_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Piuwee",
  description: "Piuwee App",
  icons: {
    icon: [{ url: "/favicon/favicon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SnowFlakes />
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">
            <Navbar />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
