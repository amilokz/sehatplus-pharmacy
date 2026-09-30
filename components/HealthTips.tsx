import Image from "next/image";
import { ArrowRight, HeartPulse } from "lucide-react";
import { waLink } from "@/data/products";

const TIPS = [
  {
    img: "/img-vitamins.webp",
    alt: "Vitamins and fresh oranges flat-lay",
    tag: "Immunity",
    title: "Boost immunity the smart way",
    desc: "Vitamin C, D3 and zinc support your immune system — especially in changing seasons. Ask our pharmacists for the right dose for you.",
  },
  {
    img: "/img-shelves.webp",
    alt: "Organized pharmacy shelves",
    tag: "Storage",
    title: "Store medicines correctly",
    desc: "Keep medicines in a cool, dry place away from sunlight — never in the bathroom. Check expiry dates every three months.",
  },
  {
    img: "/img-delivery.webp",
    alt: "SehatPlus delivery rider with pharmacy bag",
    tag: "Safety",
    title: "Never skip doses",
    desc: "Running low on a regular medicine? Order a day early. Our 60-minute delivery means you never miss a dose again.",
  },
];

export default function HealthTips() {
  return (
    <section className="bg-teal-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-teal-600">
              <HeartPulse className="h-4 w-4" /> Health Tips
            </p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Small Habits, <span className="text-heal">Big Health</span>
            </h2>
          </div>
          <a
            href={waLink(
              "Assalam-o-Alaikum SehatPlus! I have a health question for your pharmacist.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-teal-600/30 bg-white px-6 py-3 text-sm font-bold text-teal-700 transition-all hover:border-teal-600 hover:bg-teal-50"
          >
            Ask our pharmacist <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {TIPS.map((t) => (
            <article
              key={t.title}
              className="card-lift group overflow-hidden rounded-3xl border border-teal-900/10 bg-white"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700 backdrop-blur">
                  {t.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
