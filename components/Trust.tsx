import {
  BadgeCheck,
  ShieldCheck,
  PackageCheck,
  Timer,
} from "lucide-react";

const BADGES = [
  {
    icon: BadgeCheck,
    title: "Licensed Pharmacists",
    desc: "Every order is reviewed by a PMC-registered pharmacist before dispatch.",
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine Medicines",
    desc: "Sourced only from licensed distributors — no grey-market stock, ever.",
  },
  {
    icon: PackageCheck,
    title: "Discreet Packing",
    desc: "Plain, tamper-proof packaging. Your health matters stay private.",
  },
  {
    icon: Timer,
    title: "60-Minute Delivery",
    desc: "Express delivery across service areas, with live order updates.",
  },
];

export default function Trust() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-teal-600">
            Why SehatPlus
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Care You Can <span className="text-heal">Trust</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BADGES.map((b) => (
            <div
              key={b.title}
              className="card-lift rounded-3xl border border-teal-900/10 bg-gradient-to-b from-teal-50/80 to-white p-7 text-center"
            >
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-teal-900/10">
                <b.icon className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
