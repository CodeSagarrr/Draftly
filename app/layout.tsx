import type { Metadata } from "next";
import { Rubik, Ubuntu } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-ubuntu',
})

export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['600', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Draftly",
  description: "Quickly draft, polish, and send emails",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} ${rubik.variable} `}
      >
        <SessionProvider>
          <Toaster
          position="bottom-right"
          reverseOrder={false}
          />
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
