import { Kalam } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Chaos Zone",
  description: "Chaos Zone App",
  icons: {
    icon: [{ url: "/favicon/favicon.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kalam.className}>{children}</body>
    </html>
  );
}
