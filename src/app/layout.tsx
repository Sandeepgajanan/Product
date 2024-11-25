'use client';

import "./globals.css";
import 'remixicon/fonts/remixicon.css';
import { ReactLenis} from '@studio-freight/react-lenis'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ReactLenis root>
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
    </ReactLenis>
  );
}
