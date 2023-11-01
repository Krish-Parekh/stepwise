"use client";

import React from "react";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { motion } from "framer-motion";
import Image from "next/image";
import AuthBannerImage from "@/public/AuthBannerImage.svg";
import "@/app/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dividerClassName = clsx(
    inter.className,
    "min-h-screen flex flex-col md:flex-row"
  );
  return (
    <html lang="en">
      <body>
        <div className={dividerClassName}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex w-1/2 items-center justify-center"
          >
            {children}
          </motion.div>
          <div className="flex h-screen w-1/2 items-center justify-center bg-black">
            <Image
              src={AuthBannerImage}
              alt="Auth Banner Image"
              width={750}
              height={750}
            />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
