import type {Metadata} from "next";
import {Heebo} from "next/font/google";
import "./globals.css";
import BottomBar from "@/components/Bottombar";
import {Provider} from "./provider";

const heebo = Heebo({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Jur'atbek Xudayberganov",
    description: "Created by Jur'atbek Xudayberganov",
    icons: {
        icon: "/head-icon.jpg",
    },
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={heebo.className}>
        <div className="container mx-auto w-4/5 mt-5">
            <Provider>{children}</Provider>
            <BottomBar/>
        </div>
        </body>
        </html>
    );
}
