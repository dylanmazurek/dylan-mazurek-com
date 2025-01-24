import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dylan Mazurek",
    description: "Dylan Mazurek's personal website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-sans text-foreground bg-background">
                {children}
            </body>
        </html>
    );
}
