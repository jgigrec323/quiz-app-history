import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "History Quiz",
  description: "Made with heart by jgigrec323",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.className}`}>
        <main className="w-full h-screen p-8 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
