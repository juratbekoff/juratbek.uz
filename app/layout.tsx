import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";
import BottomBar from "@/components/Bottombar";
import { Provider } from "./provider";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juratbek.uz",
  description: "Created by Juratbek Xudayberganov",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        <div className="container mx-auto w-4/5 mt-5">
          <Provider>{children}</Provider>
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
