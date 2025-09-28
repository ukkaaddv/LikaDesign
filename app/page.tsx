'use client';

import Image from "next/image";
import Link from "next/link";

import { FacebookLink } from "@/components/facebook-link";
import { MobileNav } from "@/components/mobile-nav";
import { JSX, useEffect, useMemo, useState } from "react";

type IconProps = {
  className?: string;
};

const FacebookIcon = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-4 w-4 ${className}`}
  >
    <path
      fill="currentColor"
      d="M22 12.07C22 6.49 17.52 2 11.95 2 6.38 2 2 6.48 2 12.07 2 17.1 5.66 21.2 10.44 22v-7.04H7.9v-2.89h2.53V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.63.77-1.63 1.57v1.89h2.78l-.44 2.89h-2.34V22C18.34 21.2 22 17.1 22 12.07z"
    />
  </svg>
);

const InstagramIcon = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-4 w-4 ${className}`}
  >
    <path
      fill="currentColor"
      d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm11 1.8a1.2 1.2 0 11-1.2 1.2 1.2 1.2 0 011.2-1.2zm-6 1.2a5 5 0 11-5 5 5 5 0 015-5zm0 2a3 3 0 103 3 3 3 0 00-3-3z"
    />
  </svg>
);

const MailIcon = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-4 w-4 ${className}`}
  >
    <path
      fill="currentColor"
      d="M4.5 5h15a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-11A1.5 1.5 0 014.5 5zm.75 2l6.75 4.5L18.75 7zM19.5 17.5v-7l-7.5 5-7.5-5v7z"
    />
  </svg>
);

const SunIcon = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-4 w-4 ${className}`}
  >
    <path
      fill="currentColor"
      d="M12 6.75A5.25 5.25 0 1112 17.25 5.25 5.25 0 0112 6.75zm0-4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 2.25zm0 19.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zm9-9a.75.75 0 01.75.75h0v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0121 12.75zm-18 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 013 12.75zm14.722-6.472l1.06-1.06a.75.75 0 011.061 1.06l-1.06 1.061a.75.75 0 11-1.061-1.061zm-12.728 12.73l1.061-1.061a.75.75 0 011.06 1.06l-1.06 1.061a.75.75 0 11-1.061-1.06zM5.293 4.232a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.061l-1.06-1.06a.75.75 0 010-1.061zm12.728 12.728a.75.75 0 011.06 0l1.061 1.06a.75.75 0 11-1.061 1.061l-1.06-1.06a.75.75 0 010-1.061z"
    />
  </svg>
);

const MoonIcon = ({ className = "" }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`h-4 w-4 ${className}`}
  >
    <path
      fill="currentColor"
      d="M20.354 14.354a8.25 8.25 0 01-10.708-10.708.75.75 0 00-.88-.973 9.75 9.75 0 1012.56 12.56.75.75 0 00-.972-.879z"
    />
  </svg>
);

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Réalisation", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Conception sur-mesure",
    description:
      "Plans immersifs et sélection matériaux parfaitement ajustés à votre intérieur.",
  },
  {
    title: "Fabrication & pose",
    description:
      "Mobilier premium fabriqué pour vous et posé avec une précision millimétrée.",
  },
  {
    title: "Accompagnement signature",
    description:
      "Coordination complète du chantier pour une livraison clé en main élégante.",
  },
];

const realisations = [
  {
    src: "/images/realisation1.jpg",
    alt: "Cuisine moderne avec îlot central et rangements rétro-éclairés",
  },
  {
    src: "/images/realisation2.jpg",
    alt: "Cuisine contemporaine minimaliste aux tons clairs",
  },
  {
    src: "/images/realisation3.jpg",
    alt: "Cuisine lumineuse avec meubles en bois et verrière sur mesure",
  },
];

const CONTACT_EMAIL = "lika.design.ch@gmail.com";

const CONTACT_PHONE = {
  raw: "+41767069542",
  display: "+41 76 706 95 42",
};

const ADDRESS = "Rue de Lausanne 28, 1530 Payerne";

const googleMaps = {
  embedUrl:
    "https://maps.google.com/maps?q=Rue%20de%20Lausanne%2028%201530%20Payerne&t=&z=15&ie=UTF8&iwloc=&output=embed",
  link: "https://www.google.com/maps/dir/?api=1&destination=Rue+de+Lausanne+28,+1530+Payerne",
};

const facebookLinks = {
  app: "fb://profile/likadesignsarl",
  web: "https://www.facebook.com/likadesignsarl",
};

type FooterSocial =
  | {
      label: string;
      kind: "facebook";
      appUrl: string;
      webUrl: string;
      icon: (props: IconProps) => JSX.Element;
    }
  | {
      label: string;
      kind: "external";
      href: string;
      icon: (props: IconProps) => JSX.Element;
      newTab?: boolean;
    };

const footerSocials: FooterSocial[] = [
  {
    label: "Facebook",
    kind: "facebook",
    appUrl: facebookLinks.app,
    webUrl: facebookLinks.web,
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    kind: "external",
    href: "https://www.instagram.com/likadesignsarl",
    icon: InstagramIcon,
  },
  {
    label: "Mail",
    kind: "external",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: MailIcon,
    newTab: false,
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeRealisation, setActiveRealisation] =
    useState<(typeof realisations)[number] | null>(null);

  const themeTokens = useMemo(() => {
    const isLight = theme === "light";

    const palettes = {
      light: {
        body: "bg-neutral-200 text-neutral-900",
        header:
          "sticky top-0 z-50 border-b backdrop-blur transition-colors duration-500 border-neutral-300/60 bg-neutral-200/80 text-neutral-900",
        navLink:
          "inline-flex items-center rounded-full border px-5 py-2.5 shadow-[0_10px_25px_-18px_rgba(0,0,0,0.7)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500/60 border-neutral-400 text-neutral-700 hover:border-orange-500/70 hover:bg-orange-500/10 hover:text-orange-500",
        primaryCta:
          "inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition border-orange-500 bg-orange-500 text-white hover:bg-orange-400",
        toggleButton:
          "inline-flex items-center justify-center rounded-full border p-2 transition border-neutral-400 bg-neutral-200 text-neutral-700 hover:bg-neutral-300",
        secondaryButton:
          "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition border-neutral-400 text-neutral-700 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10",
        secondaryChip:
          "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] transition border-neutral-400 bg-neutral-200 text-neutral-600",
        textStrong: "text-neutral-900",
        brandPrimary: "text-neutral-900",
        textMuted: "text-neutral-600",
        textSoft: "text-neutral-500",
        statNumber: "text-neutral-900",
        statLabel: "text-neutral-600",
        surfaceMuted: "border border-neutral-400 bg-neutral-200/80",
        sectionServices:
          "relative border-y border-neutral-300 bg-gradient-to-br from-neutral-300 via-neutral-200 to-neutral-100 overflow-hidden",
        serviceCard:
          "group relative flex h-full flex-col gap-6 rounded-3xl border border-neutral-300 bg-neutral-200 p-8 shadow-lg transition-all duration-200 hover:border-orange-400/70 hover:bg-orange-50/60 hover:shadow-orange-200/40",
        serviceIndex:
          "text-6xl font-semibold transition text-orange-300/70 group-hover:text-orange-500",
        serviceTitle:
          "text-2xl font-semibold leading-tight transition-colors text-neutral-900 group-hover:text-orange-600",
        serviceDescription:
          "text-lg leading-relaxed transition-colors text-neutral-600 group-hover:text-neutral-700",
        outlineLink:
          "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition border-neutral-400 text-neutral-700 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10",
        sectionRealisations: "border-b border-neutral-300 bg-neutral-200",
        realisationCard:
          "overflow-hidden rounded-3xl transition-colors duration-300 border border-neutral-300 bg-neutral-200",
        realisationOverlay:
          "pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-500 bg-gradient-to-t from-neutral-200/90 via-neutral-200/50 to-transparent group-hover:opacity-100",
        realisationTag:
          "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] border-neutral-300 bg-neutral-200/90 text-neutral-600",
        realisationCaption:
          "text-sm font-medium leading-snug text-neutral-800",
        accentLink:
          "inline-flex items-center gap-2 rounded-full border border-orange-400 bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400",
        accentGhost:
          "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white",
        sectionContact: "transition-colors duration-500 bg-neutral-200",
        contactCard:
          "rounded-3xl border border-neutral-300 bg-neutral-200 p-6 text-sm text-neutral-700 shadow-lg transition hover:border-orange-400/70 hover:bg-orange-50/60",
        contactLink:
          "mt-2 block break-all text-lg font-bold transition text-neutral-900 hover:text-orange-500",
        contactAddress:
          "mt-2 text-base font-bold leading-snug transition text-neutral-900",
        mapContainer:
          "overflow-hidden rounded-3xl border border-neutral-300 bg-neutral-200",
        formCard:
          "space-y-4 rounded-3xl border border-neutral-300 bg-neutral-200/90 p-8 text-sm text-neutral-700 shadow-xl",
        inputLabel:
          "block text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500",
        input:
          "mt-2 w-full rounded-lg border border-neutral-400 bg-neutral-100 px-4 py-3 text-sm text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-0",
        footer:
          "border-t transition-colors duration-500 border-neutral-300 bg-neutral-200/90",
        footerBrand: "text-neutral-800",
        footerMuted: "text-neutral-600",
        footerLink: "transition hover:text-orange-500",
        footerPill:
          "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition border-neutral-300 bg-neutral-200 text-neutral-700 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-500",
        footerIcon:
          "text-orange-400 transition group-hover:text-orange-500",
      },
      dark: {
        body: "bg-neutral-900 text-neutral-100",
        header:
          "sticky top-0 z-50 border-b backdrop-blur transition-colors duration-500 border-white/10 bg-neutral-950/85 text-white",
        navLink:
          "inline-flex items-center rounded-full border px-5 py-2.5 shadow-[0_10px_25px_-18px_rgba(0,0,0,0.7)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500/60 border-white/12 text-white/75 hover:border-orange-500/60 hover:bg-white/10 hover:text-orange-300",
        primaryCta:
          "inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition border-orange-500 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-black",
        toggleButton:
          "inline-flex items-center justify-center rounded-full border p-2 transition border-white/15 bg-white/10 text-white hover:bg-white/20",
        secondaryButton:
          "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition border-white/15 text-white hover:border-orange-500 hover:text-orange-400",
        secondaryChip:
          "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] transition border-white/10 bg-white/5 text-white/70",
        textStrong: "text-white",
        brandPrimary: "text-white",
        textMuted: "text-neutral-400",
        textSoft: "text-white/50",
        statNumber: "text-white",
        statLabel: "text-white/60",
        surfaceMuted: "border border-white/10 bg-white/5",
        sectionServices:
          "relative border-y border-white/10 bg-gradient-to-br from-neutral-950/90 via-neutral-950/80 to-black/70 overflow-hidden",
        serviceCard:
          "group relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg transition-all duration-200 hover:border-orange-500/70 hover:bg-white/10 hover:shadow-orange-500/10",
        serviceIndex:
          "text-6xl font-semibold transition text-white/10 group-hover:text-orange-400/60",
        serviceTitle:
          "text-2xl font-semibold leading-tight transition-colors text-white group-hover:text-orange-300",
        serviceDescription:
          "text-lg leading-relaxed transition-colors text-neutral-200 group-hover:text-neutral-100",
        outlineLink:
          "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition border-white/15 text-white hover:border-orange-500 hover:text-orange-400",
        sectionRealisations: "border-b border-white/5 bg-neutral-900/40",
        realisationCard:
          "overflow-hidden rounded-3xl transition-colors duration-300 border border-white/10 bg-white/5",
        realisationOverlay:
          "pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:opacity-100",
        realisationTag:
          "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] border-white/15 bg-black/40 text-white/70",
        realisationCaption:
          "text-sm font-medium leading-snug text-white",
        accentLink:
          "inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black",
        accentGhost:
          "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black",
        sectionContact: "transition-colors duration-500 bg-neutral-950/90",
        contactCard:
          "rounded-3xl border border-white/15 bg-black/60 p-6 text-sm text-white/80 shadow-lg transition hover:border-orange-500 hover:bg-black/80",
        contactLink:
          "mt-2 block break-all text-lg font-bold transition text-white hover:text-orange-400",
        contactAddress:
          "mt-2 text-base font-bold leading-snug transition text-white",
        mapContainer:
          "overflow-hidden rounded-3xl border border-white/10 bg-black/30",
        formCard:
          "space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-white/70",
        inputLabel:
          "block text-xs font-semibold uppercase tracking-[0.4em] text-white/50",
        input:
          "mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-0",
        footer:
          "border-t transition-colors duration-500 border-white/10 bg-neutral-950/95",
        footerBrand: "text-white/70",
        footerMuted: "text-white/40",
        footerLink: "transition hover:text-orange-400",
        footerPill:
          "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition border-white/10 text-white/80 hover:border-orange-500 hover:text-orange-400",
        footerIcon:
          "text-orange-400 transition group-hover:text-orange-300",
      },
    };

    return {
      isLight,
      ...palettes[isLight ? "light" : "dark"],
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    if (!activeRealisation) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveRealisation(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeRealisation]);

  const lightboxTokens = themeTokens.isLight
      ? {
        backdrop: "bg-neutral-900/60",
        panel:
          "relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-neutral-200/70 bg-neutral-100 px-4 pb-6 pt-12 shadow-2xl text-neutral-900",
        close:
          "absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100/80 text-neutral-600 shadow-md transition hover:border-orange-400 hover:text-orange-500",
      }
    : {
        backdrop: "bg-black/80",
        panel:
          "relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/95 px-4 pb-6 pt-12 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] text-white",
        close:
          "absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 shadow-lg transition hover:border-orange-500 hover:text-orange-400",
      };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${themeTokens.body}`}>
      <header className={themeTokens.header}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 md:px-6 md:py-4">
          <a href="#accueil" className="text-xl font-semibold tracking-tight sm:text-2xl">
            <span className="text-orange-500">Lika</span>
            <span className={themeTokens.brandPrimary}>Design</span>
          </a>
          <nav className="hidden items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={themeTokens.navLink}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className={themeTokens.toggleButton}
              aria-pressed={themeTokens.isLight}
              aria-label={`Activer le theme ${themeTokens.isLight ? "sombre" : "clair"}`}
            >
              {themeTokens.isLight ? (
                <>
                  <MoonIcon className="h-4 w-4" />
                  <span className="sr-only">Basculer en mode sombre</span>
                </>
              ) : (
                <>
                  <SunIcon className="h-4 w-4" />
                  <span className="sr-only">Basculer en mode clair</span>
                </>
              )}
            </button>
            <a href="#contact" className={`hidden md:inline-flex ${themeTokens.primaryCta}`}>
              Demander un devis
            </a>
            <MobileNav
              items={navItems}
              ctaLabel="Demander un devis"
              ctaHref="#contact"
              contactEmail={CONTACT_EMAIL}
              contactPhone={CONTACT_PHONE.display}
              theme={theme}
            />
          </div>
        </div>
      </header>
      <div id="mobile-menu-root" className="md:hidden" />

      <main className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.12),_transparent_55%)]" />
        <section
          id="accueil"
          className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-20 pt-14 sm:px-6 sm:pt-16 md:gap-12 md:pb-24 md:pt-20 lg:flex-row lg:items-center"
        >
          <div className="flex-1 space-y-6 sm:space-y-7 md:space-y-8">
            <span className={themeTokens.secondaryChip}>
              Agencement premium
            </span>
            <h1
              className={`text-5xl font-semibold tracking-tight sm:text-4xl md:text-5xl ${themeTokens.textStrong}`}
            >
              <span className="text-orange-500">Lika</span>
              <span className={themeTokens.brandPrimary}>Design</span>
            </h1>
            <p className={`max-w-xl text-base sm:text-lg ${themeTokens.textMuted}`}>
              LikaDesign imagine et réalise des intérieurs élégants qui allient
              ergonomie, matériaux nobles et ambiance chaleureuse. Nous donnons
              vie à vos projets avec une approche sur-mesure.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
              >
                Demander un devis
              </a>
              <a
                href="#services"
                className={themeTokens.secondaryButton}
              >
                Découvrir nos services
              </a>
            </div>
            <div
              className={`grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.3em] sm:gap-6 sm:text-sm ${themeTokens.textSoft}`}
            >
              <div>
                <p className={`text-3xl font-semibold ${themeTokens.statNumber}`}>12+</p>
                <p className={themeTokens.statLabel}>Années d{`'`}expérience</p>
              </div>
              <div>
                <p className={`text-3xl font-semibold ${themeTokens.statNumber}`}>50+</p>
                <p className={themeTokens.statLabel}>Projets livrés</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div
              className={`relative mx-auto max-w-md overflow-hidden rounded-3xl p-3 shadow-[0_20px_60px_-35px_rgba(249,115,22,0.5)] ${themeTokens.surfaceMuted}`}
            >
              <Image
                src="/images/accueil.jpg"
                alt="Cuisine contemporaine réalisée par LikaDesign"
                width={640}
                height={820}
                priority
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section id="services" className={themeTokens.sectionServices}>
          
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-orange-400/90 drop-shadow-sm">
                Nos services
              </h2>
              <p className={`mb-3 text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-sm ${themeTokens.textStrong}`}>
                Sublimez votre intérieur, simplement.
              </p>
              <p className={`text-base ${themeTokens.textMuted}`}>
                De la conception à la pose, nous vous accompagnons à chaque étape pour un projet sans stress.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className={themeTokens.serviceCard}
                >
                  <span className={themeTokens.serviceIndex}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className={themeTokens.serviceTitle}>
                    {service.title}
                  </h3>
                  <p className={themeTokens.serviceDescription}>
                    {service.description}
                  </p>
                  <div className="pointer-events-none absolute inset-x-6 bottom-6 h-px bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="realisations"
          className={themeTokens.sectionRealisations}
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
                  Réalisations
                </h2>
                <p className={`mt-2 text-3xl font-semibold md:text-4xl ${themeTokens.textStrong}`}>
                  Des espaces inspirants, pensés pour durer.
                </p>
              </div>
              <p className={`max-w-xl ${themeTokens.textMuted}`}>
                Chaque projet est conçu avec soin pour offrir un équilibre parfait
                entre modernité, fonctionnalité et élégance intemporelle.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/realisations-plus" className={themeTokens.accentGhost}>
                Voir plus de realisations
                <span aria-hidden className="text-base">&rarr;</span>
              </Link>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {realisations.map((realisation, idx) => (
                <button
                  key={realisation.src}
                  type="button"
                  onClick={() => setActiveRealisation(realisation)}
                  className={`${themeTokens.realisationCard} group w-full transition-transform hover:-translate-y-1 hover:shadow-orange-500/10`}
                >
                  <span className="sr-only">
                    Agrandir {realisation.alt}
                  </span>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={realisation.src}
                      alt={realisation.alt}
                      width={520}
                      height={640}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={themeTokens.realisationOverlay} />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-2 px-6 pb-6 pt-12">
                      <span className={themeTokens.realisationTag}>
                        Projet {String(idx + 1).padStart(2, "0")}
                      </span>
                      <p className={themeTokens.realisationCaption}>{realisation.alt}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={themeTokens.sectionContact}>
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
                Contact
              </h2>
              <p className={`text-3xl font-semibold md:text-4xl ${themeTokens.textStrong}`}>
                Parlons de votre prochain projet.
              </p>
              <p className={`max-w-xl ${themeTokens.textMuted}`}>
                Nous serions ravis d{`'`}échanger sur vos envies, de nous déplacer chez vous
                ou de vous accueillir à notre showroom de Payerne. Partagez-nous quelques
                informations et notre équipe vous recontacte rapidement.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className={themeTokens.contactCard}>
                  <div className={`mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] ${themeTokens.textSoft}`}>
                    <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 5h15a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-11A1.5 1.5 0 014.5 5zm.75 2l6.75 4.5L18.75 7zM19.5 17.5v-7l-7.5 5-7.5-5v7z"/></svg>
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className={themeTokens.contactLink}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className={themeTokens.contactCard}>
                  <div className={`mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] ${themeTokens.textSoft}`}>
                    <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
                    Téléphone
                  </div>
                  <a
                    href={`tel:${CONTACT_PHONE.raw}`}
                    className={themeTokens.contactLink}
                  >
                    {CONTACT_PHONE.display}
                  </a>
                </div>
                <div className={themeTokens.contactCard}>
                  <div className={`mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] ${themeTokens.textSoft}`}>
                    <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"/></svg>
                    Adresse
                  </div>
                  <p className={themeTokens.contactAddress}>
                    {ADDRESS}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className={themeTokens.mapContainer}>
                  <iframe
                    src={googleMaps.embedUrl}
                    title="Localisation LikaDesign"
                    className="h-64 w-full"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={googleMaps.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={themeTokens.accentLink}
                >
                  Ouvrir dans Google Maps
                  <span aria-hidden className="text-base">↗</span>
                </a>
              </div>
            </div>
            <form className={themeTokens.formCard}>
              <div>
                <label className={themeTokens.inputLabel}>
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className={themeTokens.input}
                />
              </div>
              <div>
                <label className={themeTokens.inputLabel}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="vous@exemple.com"
                  className={themeTokens.input}
                />
              </div>
              <div>
                <label className={themeTokens.inputLabel}>
                  Projet
                </label>
                <textarea
                  placeholder="Décrivez votre projet"
                  rows={4}
                  className={`${themeTokens.input} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
              >
                Envoyer ma demande
              </button>
              <p className={`text-xs ${themeTokens.textSoft}`}>
                En soumettant ce formulaire, vous acceptez d{`'`}être contacté par
                LikaDesign en vue de votre projet.
              </p>
            </form>
          </div>
        </section>
      </main>

      {activeRealisation && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Aperçu agrandi de ${activeRealisation.alt}`}
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-10 sm:px-6 ${lightboxTokens.backdrop}`}
        >
          <div
            aria-hidden
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setActiveRealisation(null)}
          />
          <div className={lightboxTokens.panel}>
            <button
              type="button"
              onClick={() => setActiveRealisation(null)}
              className={lightboxTokens.close}
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
            <div className="flex flex-col gap-4">
              <div className="relative mx-auto w-full">
                <Image
                  src={activeRealisation.src}
                  alt={activeRealisation.alt}
                  width={1040}
                  height={1300}
                  className="mx-auto h-auto w-full max-h-[70vh] rounded-2xl object-contain"
                />
              </div>
              <p className="text-center text-sm font-medium opacity-80">
                {activeRealisation.alt}
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className={themeTokens.footer}>
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-10">
          <div className={`flex flex-col items-center gap-2 text-center uppercase tracking-[0.3em] sm:flex-row sm:justify-between sm:text-left ${themeTokens.textSoft}`}>
            <div className={`flex items-center gap-1 text-sm ${themeTokens.footerBrand}`}>
              <span className="text-orange-500">Lika</span>
              <span className={themeTokens.brandPrimary}>Design</span> © {new Date().getFullYear()}
            </div>
            <p className={`text-[11px] sm:text-right ${themeTokens.footerMuted}`}>
              Agencement intérieur sur mesure
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className={`flex flex-col items-center gap-2 text-xs sm:flex-row sm:gap-4 sm:text-left ${themeTokens.footerBrand}`}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={`${themeTokens.footerLink} ${themeTokens.footerBrand}`}
              >
                {CONTACT_EMAIL}
              </a>
              <span className={`hidden sm:inline ${themeTokens.footerMuted}`}>•</span>
              <a
                href={`tel:${CONTACT_PHONE.raw}`}
                className={`${themeTokens.footerLink} ${themeTokens.footerBrand}`}
              >
                {CONTACT_PHONE.display}
              </a>
            </div>
            <div className="flex w-full flex-wrap justify-center gap-3 sm:w-auto sm:justify-end">
              {footerSocials.map((social) => {
                const Icon = social.icon;

                if (social.kind === "facebook") {
                  return (
                    <FacebookLink
                      key={social.label}
                      appUrl={social.appUrl}
                      webUrl={social.webUrl}
                      className={themeTokens.footerPill}
                    >
                      <Icon className={themeTokens.footerIcon} />
                      <span>{social.label}</span>
                    </FacebookLink>
                  );
                }

                const target = social.newTab === false ? "_self" : "_blank";
                const rel = target === "_blank" ? "noopener noreferrer" : undefined;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={target}
                    rel={rel}
                    className={themeTokens.footerPill}
                  >
                    <Icon className={themeTokens.footerIcon} />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}





