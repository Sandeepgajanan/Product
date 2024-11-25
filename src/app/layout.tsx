'use client';

import "./globals.css";
import 'remixicon/fonts/remixicon.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

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
