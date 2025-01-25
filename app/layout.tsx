import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "400", style: "normal", display: "swap" });

export const metadata: Metadata = {
    title: "Dylan Mazurek",
    description: "Dylan Mazurek's personal website",
    authors: [{ name: "Dylan Mazurek" }],
    icons: [
        { rel: "icon", type: "image/svg+xml", url: "/favicon.svg" }
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={roboto.className}>
            <body>
                {children}
            </body>
        </html>
    );
}
