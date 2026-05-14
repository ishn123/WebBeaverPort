"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersPopup from "@/components/CareersPopup";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isCareersOpen, setIsCareersOpen] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      {children}
      <CareersPopup isOpen={isCareersOpen} setIsOpen={setIsCareersOpen} />
      <Footer setIsOpen={setIsCareersOpen} />
    </>
  );
}
