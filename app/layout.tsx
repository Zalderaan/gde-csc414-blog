import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { MainNav } from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CS Seminars & Educational Trips",
  description: "A coursework compilation blog documenting CS Seminars and Educational Trips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-background bg-dot-matrix`}>
        <ThemeProvider>
          <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
            <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
              <Link href="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
                CS Seminars
              </Link>
              <div className="flex items-center gap-8 h-full">
                <MainNav />
                <ThemeToggle />
              </div>
            </nav>
          </header>
          <main className="max-w-[1280px] mx-auto px-6 py-12">
            {children}
          </main>
          <footer className="border-t border-border mt-20 bg-background/80 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2026 CS Seminars & Educational Trips. All rights reserved.</p>
              <p>Created by <span className="text-foreground font-medium">Godfrey Eclarinal</span> — BSCS 4A</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
