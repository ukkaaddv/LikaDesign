import Image from "next/image";

import { FacebookLink } from "@/components/facebook-link";
import { MobileNav } from "@/components/mobile-nav";
import { JSX } from "react";

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
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#accueil" className="text-2xl font-semibold tracking-tight">
            <span className="text-white">Lika</span>
            <span className="text-orange-500">Design</span>
          </a>
          <nav className="hidden md:flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full border border-white/12 px-5 py-2.5 shadow-[0_10px_25px_-18px_rgba(0,0,0,0.7)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-500/60 hover:border-orange-500/60 hover:bg-white/[0.08] hover:text-orange-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full border border-orange-500 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black"
            >
              Demander un devis
            </a>
            <MobileNav
              items={navItems}
              ctaLabel="Demander un devis"
              ctaHref="#contact"
              contactEmail={CONTACT_EMAIL}
              contactPhone={CONTACT_PHONE.display}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              Agencement premium
            </span>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              <span className="text-white">Lika</span>
              <span className="text-orange-500">Design</span>
            </h1>
            <p className="max-w-xl text-base text-neutral-400 sm:text-lg">
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
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
              >
                Découvrir nos services
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.3em] text-white/50 sm:gap-6 sm:text-sm">
              <div>
                <p className="text-3xl font-semibold text-white">12+</p>
                <p>Années d{`'`}expérience</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">150+</p>
                <p>Projets livrés</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_-35px_rgba(249,115,22,0.5)]">
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

        <section
          id="services"
          className="relative border-y border-white/10 bg-gradient-to-br from-neutral-950/95 via-neutral-950/90 to-black/80 overflow-hidden"
        >
          
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-orange-400/90 drop-shadow-sm">
                Nos services
              </h2>
              <p className="mb-3 text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                Sublimez votre intérieur, simplement.
              </p>
              <p className="text-base text-neutral-300">
                De la conception à la pose, nous vous accompagnons à chaque étape pour un projet sans stress.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service, idx) => (
                <div
                  key={service.title}
                  className="group relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg transition-all duration-200 hover:border-orange-500/70 hover:bg-white/10 hover:shadow-orange-500/10"
                >
                  <span className="text-6xl font-semibold text-white/10 transition group-hover:text-orange-400/60">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-neutral-200">
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
          className="border-b border-white/5 bg-neutral-900/40"
        >
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
                  Réalisations
                </h2>
                <p className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                  Des espaces inspirants, pensés pour durer.
                </p>
              </div>
              <p className="max-w-xl text-neutral-400">
                Chaque projet est conçu avec soin pour offrir un équilibre parfait
                entre modernité, fonctionnalité et élégance intemporelle.
              </p>
            </div>
            <div className="mt-8">
              <FacebookLink
                appUrl={facebookLinks.app}
                webUrl={facebookLinks.web}
                className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500/10 px-5 py-2.5 text-sm font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black"
              >
                Voir plus de réalisations
                <span aria-hidden className="text-base">→</span>
              </FacebookLink>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {realisations.map((realisation) => (
                <div
                  key={realisation.src}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <Image
                    src={realisation.src}
                    alt={realisation.alt}
                    width={520}
                    height={640}
                    className="h-72 w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                  <div className="px-6 py-5 text-sm text-white/70">
                    {realisation.alt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-neutral-950/90">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-400">
                Contact
              </h2>
              <p className="text-3xl font-semibold text-white md:text-4xl">
                Parlons de votre prochain projet.
              </p>
              <p className="max-w-xl text-neutral-400">
                Nous serions ravis d{`'`}échanger sur vos envies, de nous déplacer chez vous
                ou de vous accueillir à notre showroom de Payerne. Partagez-nous quelques
                informations et notre équipe vous recontacte rapidement.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/15 bg-black/60 p-6 text-sm text-white/80 shadow-lg transition hover:border-orange-500 hover:bg-black/80">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-1">
                    <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 5h15a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-11A1.5 1.5 0 014.5 5zm.75 2l6.75 4.5L18.75 7zM19.5 17.5v-7l-7.5 5-7.5-5v7z"/></svg>
                    Email
                  </div>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-2 break-all block text-lg font-bold text-white hover:text-orange-400 transition"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="rounded-3xl border border-white/15 bg-black/60 p-6 text-sm text-white/80 shadow-lg transition hover:border-orange-500 hover:bg-black/80">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-1">
                    <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
                    Téléphone
                  </div>
                  <a
                    href={`tel:${CONTACT_PHONE.raw}`}
                    className="mt-2 block text-lg font-bold text-white hover:text-orange-400 transition"
                  >
                    {CONTACT_PHONE.display}
                  </a>
                </div>
                <div className="rounded-3xl border border-white/15 bg-black/60 p-6 text-sm text-white/80 shadow-lg transition hover:border-orange-500 hover:bg-black/80">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/50 mb-1">
                    <svg className="h-4 w-4 text-orange-400" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"/></svg>
                    Adresse
                  </div>
                  <p className="mt-2 text-base font-bold text-white leading-snug">
                    {ADDRESS}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30">
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
                  className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black"
                >
                  Ouvrir dans Google Maps
                  <span aria-hidden className="text-base">↗</span>
                </a>
              </div>
            </div>
            <form className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-white/70">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                  Nom complet
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="vous@exemple.com"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                  Projet
                </label>
                <textarea
                  placeholder="Décrivez votre projet"
                  rows={4}
                  className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-0"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
              >
                Envoyer ma demande
              </button>
              <p className="text-xs text-white/40">
                En soumettant ce formulaire, vous acceptez d{`'`}être contacté par
                LikaDesign en vue de votre projet.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-950/95">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-6 py-10">
          <div className="flex flex-col items-center gap-2 text-center uppercase tracking-[0.3em] text-white/50 sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-1 text-sm text-white/70">
              <span className="text-white">Lika</span>
              <span className="text-orange-500">Design</span> © {new Date().getFullYear()}
            </div>
            <p className="text-[11px] text-white/40 sm:text-right">
              Agencement intérieur sur mesure · Paris & environs
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-center gap-2 text-xs text-white/60 sm:flex-row sm:gap-4 sm:text-left">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition hover:text-orange-400"
              >
                {CONTACT_EMAIL}
              </a>
              <span className="hidden text-white/30 sm:inline">•</span>
              <a
                href={`tel:${CONTACT_PHONE.raw}`}
                className="transition hover:text-orange-400"
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
                      className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-orange-500 hover:text-orange-400"
                    >
                      <Icon className="text-orange-400 transition group-hover:text-orange-300" />
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
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/80 transition hover:border-orange-500 hover:text-orange-400"
                  >
                    <Icon className="text-orange-400 transition group-hover:text-orange-300" />
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
