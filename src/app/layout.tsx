'use client';

import { useEffect } from "react";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';
import Lenis from 'lenis';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/bandeins.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <title>BrandName</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
