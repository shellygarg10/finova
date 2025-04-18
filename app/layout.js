import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Finova",
  description: "AI Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header*/}
          <Header />

          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* footer */}
          <footer className="w-full bg-black text-gray-400 text-sm py-4">
            <div className="container mx-auto flex justify-between items-center">
              <p>© 2025 Finova. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
