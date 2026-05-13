"use client";
import React, { useState } from "react";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersPopup from "@/components/CareersPopup";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCareersOpen, setIsCareersOpen] = useState<boolean>(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>Professional UI/UX Design Services | Webeaver</title>
        <meta
          name="description"
          content="We craft intuitive, user-centered interfaces that drive engagement and conversions. Our UI/UX design process combines research, prototyping, and testing."
        />
        <link rel="icon" href="/logo.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webeaver.de/" />
        <meta
          property="og:title"
          content="Professional UI/UX Design Services | Webeaver"
        />
        <meta
          property="og:description"
          content="We craft intuitive, user-centered interfaces that drive engagement and conversions."
        />
        <meta property="og:image" content="https://webeaver.de/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://webeaver.de/" />
        <meta
          property="twitter:title"
          content="Professional UI/UX Design Services | Webeaver"
        />
        <meta
          property="twitter:description"
          content="We craft intuitive, user-centered interfaces that drive engagement and conversions."
        />
        <meta property="twitter:image" content="https://webeaver.de/logo.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <CareersPopup isOpen={isCareersOpen} setIsOpen={setIsCareersOpen} />
        <Footer setIsOpen={setIsCareersOpen} />
      </body>
    </html>
  );
}
