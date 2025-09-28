import Image from "next/image";
import Link from "next/link";

import { FacebookLink } from "@/components/facebook-link";

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

const socialLinks = {
  facebook: {
    app: "fb://profile/likadesignsarl",
    web: "https://www.facebook.com/likadesignsarl",
  },
  instagram: "https://www.instagram.com/likadesignsarl",
};

const realisations = [
  {
    src: "/images/realisation1.jpg",
    alt: "Cuisine moderne avec ilot central et rangements retro-eclaires",
    title: "Projet 01",
    description: "Ambiance lumineuse melant marbre et eclairage indirect pour un esprit gallery chic.",
  },
  {
    src: "/images/realisation2.jpg",
    alt: "Cuisine contemporaine minimaliste aux tons clairs",
    title: "Projet 02",
    description: "Lignes pures et facades mates pour une cuisine pensee autour de la fluidite des gestes.",
  },
  {
    src: "/images/realisation3.jpg",
    alt: "Cuisine lumineuse avec meubles en bois et verriere sur mesure",
    title: "Projet 03",
    description: "Bois naturel, surfaces laquees et verriere atelier pour sublimer la lumiere naturelle.",
  },
  {
    src: "/images/realisation4.jpg",
    alt: "Cuisine terracotta avec ilot central retro-eclaire et credence marbree",
    title: "Projet 04",
    description: "Palette terracotta et bois fonce, relevee par un eclairage chaleureux et un ilot sculptural.",
  },
  {
    src: "/images/realisation5.jpg",
    alt: "Cuisine graphite avec long plan de travail et eclairage lineaire",
    title: "Projet 05",
    description: "Perspective profonde, facades sans poignees et lumiere rasante pour une cuisine immersive.",
  },
  {
    src: "/images/realisation6.jpg",
    alt: "Cuisine noire veinee marbre avec ilot central et vitrines retro-eclairees",
    title: "Projet 06",
    description: "Un ecrin mineral ou le marbre noir souligne la scenographie des vitrines lumineuses.",
  },
  {
    src: "/images/realisation7.jpg",
    alt: "Cuisine familiale chaleureuse avec coin repas et vitrines eclairees",
    title: "Projet 07",
    description: "Espace convivial melant vitrines, rangements genereux et table accueillante.",
  },
];

export const metadata = {
  title: "Realisations LikaDesign",
  description:
    "Decouvrez une selection de cuisines sur-mesure signees LikaDesign et explorez d'autres projets sur nos reseaux.",
};

export default function RealisationsPlusPage() {
  return (
    <div className="bg-neutral-950 text-neutral-100">
      <section className="border-b border-white/5 bg-neutral-900/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">Portfolio</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Une selection de cuisines signees LikaDesign
            </h2>
            <p className="text-neutral-300">
              Temoinages de notre savoir-faire, ces cuisines melent textures, contrastes et integrations millimetrees. Elles illustrent la diversite des envies et la precision de nos ateliers.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <FacebookLink
                appUrl={socialLinks.facebook.app}
                webUrl={socialLinks.facebook.web}
                className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500/10 px-5 py-2.5 text-sm font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black"
              >
                <FacebookIcon className="text-orange-400" />
                Notre Facebook
              </FacebookLink>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
              >
                <InstagramIcon className="text-white" />
                Instagram
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:border-orange-500 hover:text-orange-400"
              >
                Retour a l'accueil
              </Link>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {realisations.map((item) => (
              <div
                key={item.src}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg transition hover:border-orange-500/70 hover:bg-white/10"
              >
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={900}
                    height={700}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="space-y-2 px-6 pb-8 pt-6 text-sm text-white/80">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                    <span>{item.title}</span>
                    <span>Sur-mesure</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.alt}</h3>
                  <p className="text-neutral-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950/95">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-400">Encore plus d'inspiration</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Visitez notre showroom ou contactez-nous
            </h2>
            <p className="text-neutral-300">
              Nous imaginons, fabriquons et installons des cuisines qui s'adaptent a vos habitudes et a votre architecture. Confiez-nous votre projet pour une etude personnalisee.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
              >
                Retour a l'accueil
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-orange-400"
              >
                Demarrer mon projet
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 shadow-lg">
              <p className="text-xs uppercase tracking-[0.35em] text-orange-400">Reseaux sociaux</p>
              <p className="mt-2 text-lg font-semibold text-white">Suivez LikaDesign</p>
              <p className="mt-3 text-neutral-300">
                Inspirations quotidiennes, coulisses d'atelier et projets livres : rejoignez-nous sur Facebook et Instagram pour prolonger l'experience.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <FacebookLink
                  appUrl={socialLinks.facebook.app}
                  webUrl={socialLinks.facebook.web}
                  className="inline-flex items-center gap-2 rounded-full border border-orange-500 bg-orange-500/10 px-5 py-2.5 text-sm font-semibold text-orange-400 transition hover:bg-orange-500 hover:text-black"
                >
                  <FacebookIcon className="text-orange-400" />
                  LikaDesign sur Facebook
                </FacebookLink>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
                >
                  <InstagramIcon className="text-white" />
                  LikaDesign sur Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
