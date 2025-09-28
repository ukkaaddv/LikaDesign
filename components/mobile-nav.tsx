"use client";

import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  items: NavItem[];
  ctaLabel: string;
  ctaHref: string;
  contactEmail: string;
  contactPhone: string;
};

const MENU_TRANSITION_MS = 300;

export function MobileNav({
  items,
  ctaLabel,
  ctaHref,
  contactEmail,
  contactPhone,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [container, setContainer] = useState<Element | null>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousOpenRef = useRef(false);
  const dialogId = useId();
  const dialogTitleId = `${dialogId}-title`;

  useEffect(() => {
    setContainer(document.getElementById("mobile-menu-root"));
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handler);
    }

    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else if (previousOpenRef.current) {
      triggerRef.current?.focus();
    }

    previousOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      return;
    }

    if (shouldRender) {
      const timeout = window.setTimeout(
        () => setShouldRender(false),
        MENU_TRANSITION_MS,
      );

      return () => window.clearTimeout(timeout);
    }
  }, [isOpen, shouldRender]);

  const closeMenu = () => setIsOpen(false);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setShouldRender(true);
      setIsOpen(true);
    }
  };

  const panel =
    shouldRender && container
      ? createPortal(
          <div
            className={`fixed inset-0 z-50 flex justify-center px-4 py-6 text-white md:hidden ${
              isOpen ? "" : "pointer-events-none"
            }`}
          >
            <div
              aria-hidden
              className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={closeMenu}
            />
            <div className="relative z-10 flex w-full max-w-sm flex-col">
              <div
                id={dialogId}
                role="dialog"
                aria-modal={isOpen ? "true" : undefined}
                aria-labelledby={dialogTitleId}
                aria-hidden={isOpen ? undefined : true}
                className={`flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/95 px-6 pb-8 pt-6 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.85)] transition-all duration-300 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div id={dialogTitleId} className="text-lg font-semibold text-white">
                    <span className="text-white">Lika</span>
                    <span className="text-orange-500">Design</span>
                  </div>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    aria-label="Fermer le menu"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-orange-500 hover:text-orange-400"
                    onClick={closeMenu}
                  >
                    <span className="sr-only">Fermer</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="h-5 w-5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  </button>
                </div>

                <nav className="mt-6 flex flex-col gap-3">
                  {items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-orange-500/80 hover:bg-white/10 hover:text-orange-400"
                      onClick={closeMenu}
                    >
                      {item.label}
                      <span aria-hidden className="text-base text-white/40">→</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/80">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-orange-400">Contact rapide</p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="block break-words text-white transition hover:text-orange-400"
                    onClick={closeMenu}
                  >
                    {contactEmail}
                  </a>
                  <a
                    href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                    className="block text-white transition hover:text-orange-400"
                    onClick={closeMenu}
                  >
                    {contactPhone}
                  </a>
                </div>

                <a
                  href={ctaHref}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-base font-semibold text-black transition hover:bg-orange-400"
                  onClick={closeMenu}
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          </div>,
          container,
        )
      : null;

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-orange-500 hover:text-orange-400 md:hidden"
        aria-label="Ouvrir le menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? dialogId : undefined}
        onClick={toggleMenu}
      >
        <span className="flex flex-col items-center gap-1.5">
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
          <span className="h-0.5 w-5 rounded-full bg-current" />
        </span>
      </button>
      {panel}
    </>
  );
}
