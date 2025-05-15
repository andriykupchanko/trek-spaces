"use client";

import "./globals.css";
import { useEffect } from "react";
import{ usePathStore } from "../store/usePathStore";
import { usePathname } from "next/navigation";
import ChakraWrapper from "./context/ChakraWrapper";
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const setPathName = usePathStore((state) => state.setPathName);

  useEffect(() => {
    setPathName(pathname ?? "");
  }, [pathname, setPathName]);


  return (
    <html lang="en">
      <UserProvider>
        <body>
          <ChakraWrapper>{children}</ChakraWrapper>
        </body>
      </UserProvider>
    </html>
  );
}
