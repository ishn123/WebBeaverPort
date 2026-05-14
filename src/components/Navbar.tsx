"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track scroll for the navbar background change.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for whichever section is currently in view.
  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when the side panel is open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape and on viewport growing past md.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onMQ = () => {
      if (mq.matches) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMQ);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMQ);
    };
  }, []);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((p) => !p), []);

  return (
    <>
      {/* === Top bar ============================================ */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,backdrop-filter,box-shadow,padding] duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-lg shadow-[0_1px_0_0_rgba(0,0,0,0.06)] py-3"
            : "bg-background/40 backdrop-blur-md py-4 md:py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2 shrink-0"
            onClick={close}
            aria-label="Webeaver — home"
          >
            <span className="relative flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-md bg-primary text-background font-bold text-xs sm:text-sm tracking-tight">
              W
              <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
            </span>
            <span className="font-bold text-base sm:text-lg tracking-tight text-primary">
              WEBEAVER
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const active = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative px-3 lg:px-4 py-2 text-sm lg:text-[15px] transition-colors duration-200 whitespace-nowrap ${
                    active ? "text-primary" : "text-mono-dark/70 hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`pointer-events-none absolute left-3 right-3 lg:left-4 lg:right-4 -bottom-0.5 h-px origin-left bg-primary transition-transform duration-300 ease-out ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex shrink-0 group relative items-center gap-1.5 overflow-hidden rounded-full bg-primary px-4 lg:px-5 py-2 text-sm font-medium text-background hover:bg-primary/90 transition-colors"
          >
            <span className="relative z-10">Let&apos;s talk</span>
            <ArrowUpRight
              size={15}
              className="relative z-10 transition-transform duration-300 group-hover:rotate-45"
            />
          </a>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            onClick={toggle}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            className="md:hidden -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-primary touch-manipulation active:scale-95 transition-transform"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-out ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-6 bg-current rounded-full transition-opacity duration-200 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-6 bg-current rounded-full transition-all duration-300 ease-out ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </motion.header>

      {/* === Mobile side panel (rendered as sibling of header) === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-overlay"
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="absolute inset-0 w-full h-full bg-mono-dark/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.aside
              id="mobile-nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              className="absolute top-0 right-0 bottom-0 w-[88vw] max-w-sm bg-background flex flex-col shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              style={{
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: "env(safe-area-inset-bottom)",
              }}
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-mono-light/40">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-primary text-background font-bold text-xs">
                    W
                  </span>
                  <span className="font-bold tracking-tight text-primary">WEBEAVER</span>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-primary active:scale-95 transition-transform"
                >
                  <span className="relative block h-4 w-4">
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 rotate-45 bg-current rounded-full" />
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 -rotate-45 bg-current rounded-full" />
                  </span>
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 overflow-y-auto px-6 py-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-mono-dark/40 mb-4">
                  Navigate
                </p>
                <ul className="space-y-1">
                  {navItems.map((item, i) => {
                    const active = activeSection === item.href.slice(1);
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.08 + i * 0.05,
                          duration: 0.3,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={close}
                          className="group flex items-center justify-between rounded-lg px-3 py-3 -mx-3 text-2xl font-semibold tracking-tight text-primary hover:bg-mono-light/40 active:bg-mono-light/60 transition-colors"
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`inline-block h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                active
                                  ? "bg-primary scale-100"
                                  : "bg-mono-dark/20 scale-75 group-hover:scale-100"
                              }`}
                            />
                            {item.name}
                          </span>
                          <ArrowUpRight
                            size={20}
                            className="text-mono-dark/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          />
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + navItems.length * 0.05, duration: 0.3 }}
                className="px-6 pt-5 pb-6 border-t border-mono-light/40 bg-mono-light/20"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-mono-dark/40 mb-3">
                  Start a conversation
                </p>
                <a
                  href="#contact"
                  onClick={close}
                  className="group flex items-center justify-between rounded-full bg-primary px-5 py-3.5 text-background font-medium active:scale-[0.98] transition-transform"
                >
                  <span>Let&apos;s build together</span>
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </a>
                <p className="mt-4 text-xs text-mono-dark/50">
                  Reply within 24h ·{" "}
                  <a
                    href="mailto:info@webeaver.com"
                    className="underline-offset-4 hover:underline"
                  >
                    info@webeaver.com
                  </a>
                </p>
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
