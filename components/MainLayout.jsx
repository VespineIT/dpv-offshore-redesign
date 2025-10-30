"use client";

import { useSidebar } from "@/app/providers";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}