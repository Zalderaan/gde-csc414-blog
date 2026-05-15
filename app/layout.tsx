import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen bg-background`}>
        <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
          <nav className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
              CS Seminars
            </Link>
            <div className="flex gap-8">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/blogs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Blogs
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-[1280px] mx-auto px-6 py-12">
          {children}
        </main>
        <footer className="border-t border-border mt-20">
          <div className="max-w-[1280px] mx-auto px-6 py-12 text-sm text-muted-foreground">
            <p>© 2026 CS Seminars & Educational Trips. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
