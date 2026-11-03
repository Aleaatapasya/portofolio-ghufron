import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Muhammad Ghufron Arrozzaq — Finance & Administration Portfolio",
  description:
    "Professional portfolio of Muhammad Ghufron Arrozzaq, Business Administration graduate from Telkom University specializing in Finance, Business Operations, and Data Analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth dark">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-[#03132D] text-[#F5F8FF]`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
