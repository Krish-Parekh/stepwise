import React from "react";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "@/app/styles/globals.css";
import { AuthScreenClassName } from "@/lib/strings";
import type { Metadata } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stepwise",
  description: "Stepwise is a shoe store.",
}

export default function AuthScreenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={clsx(inter.className, AuthScreenClassName)}>
          <div className="flex w-1/2 items-center justify-center">
            {children}
          </div>
          <div className="h-screen w-1/2 bg-black"></div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
