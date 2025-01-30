import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/elements/Footer";
import Navbar from "@/components/elements/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ToolSmith",
  description: "A collection of ready-to-use components for your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="bg-slate-100 dark:bg-[#243041] min-h-dvh w-screen flex flex-col justify-between max-w-full">
            <div className="w-full h-full flex flex-col items-center">
              <Navbar />

              <div className="w-full max-w-[1584px]">{children}</div>
            </div>

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
