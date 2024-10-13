import type {Metadata} from "next";
import "./globals.css";
import {Noto_Sans_KR} from '@next/font/google';

const notoSansKR = Noto_Sans_KR({
    subsets: ['latin'],
    weight: ['400', '700'], // Specify the weights you need
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={notoSansKR.className}
        >
        {children}
        </body>
        </html>
    );
}
