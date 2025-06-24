"use client";

import dynamic from "next/dynamic";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/web/Footer";
import { Toaster } from "sonner";

const Header = dynamic(() => import("@/components/web/Header"), { ssr: false });

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hideNavAndFooter =
    pathname.startsWith("/dashboard") ||
    pathname === "/login" ||
    pathname === "/register";

  return (
    <SessionProvider>
      {mounted && !hideNavAndFooter && <Header />}
      {children}
      {mounted && !hideNavAndFooter && <Footer />}
      <Toaster />
    </SessionProvider>
  );
};

export default LayoutWrapper;
