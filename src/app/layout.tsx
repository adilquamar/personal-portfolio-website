import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adil Quamar | Full-stack Engineer",
  description:
    "Building scalable distributed systems and minimal, high-performance user interfaces. Software Development Engineer at AWS API Gateway.",
  keywords: [
    "Software Engineer",
    "AWS",
    "Full Stack",
    "React",
    "TypeScript",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="pb-20 md:pb-0">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
