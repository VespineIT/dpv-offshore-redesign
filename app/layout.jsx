import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Sidebar from "@/components/Sidebar";
import MainLayout from "@/components/MainLayout"; // Import the new client component
import { SITE } from "@/lib/siteData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },
  description: SITE.tagline,
};

// RootLayout is NOW a pure Server Component, as it should be.
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Sidebar />
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}