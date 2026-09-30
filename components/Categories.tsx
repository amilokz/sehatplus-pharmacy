import {
  FileText,
  Pill,
  Baby,
  Sparkles,
  Stethoscope,
  ArrowRight,
} from "lucide-react";

const CATS = [
  {
    icon: FileText,
    title: "Prescription Medicines",
    desc: "Doctor-prescribed medicines, verified by licensed pharmacists.",
    count: "2,000+ products",
    gradient: "from-teal-500 to-teal-700",
  },
  {
    icon: Pill,
    title: "Vitamins & Supplements",
    desc: "Immunity boosters, multivitamins and daily wellness essentials.",
    count: "800+ products",
    gradient: "from-emerald-500 to-green-700",
  },
  {
    icon: Baby,
    title: "Baby Care",
    desc: "Diapers, formula, lotions and gentle care for your little one.",
    count: "500+ products",
    gradient: "from-sky-500 to-cyan-700",
  },
  {
    icon: Sparkles,
    title: "Personal Care",
    desc: "Skincare, hygiene and everyday personal care favorites.",
    count: "900+ products",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    icon: Stethoscope,
    title: "Health Devices",
    desc: "BP monitors, thermometers, oximeters and home-care devices.",
    count: "300+ products",
    gradient: "from-amber-500 to-orange-600",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="relative bg-teal-50/60 py-20 sm:py-28">
      <div className="bg-dots absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-teal-600">
            Categories
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Everything for Your <span className="text-heal">Health</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Five carefully curated categories — from life-saving prescriptions
            to everyday wellness.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATS.map((c, i) => (
            <a
              key={c.title}
              href="#shop"
              className={`card-lift group relative overflow-hidden rounded-3xl border border-teal-900/10 bg-white p-7 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${c.gradient} opacity-10 blur-2xl transition-opacity group-hover:opacity-25`}
                aria-hidden="true"
              />
              <div
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.gradient} shadow-lg`}
              >
                <c.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {c.desc}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  {c.count}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-slate-900 transition-transform group-hover:translate-x-1">
                  Shop now <ArrowRight className="h-4 w-4 text-teal-600" />
                </span>
              </div>
            </a>
          ))}

          {/* CTA tile */}
          <a
            href="#prescription"
            className="card-lift group relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 p-7 text-white"
          >
            <div
              className="absolute -bottom-12 -right-12 h-48 w-48 animate-spin-slow rounded-full border-[10px] border-white/10"
              aria-hidden="true"
            />
            <FileText className="h-10 w-10 text-teal-100" />
            <h3 className="mt-5 font-display text-xl font-bold">
              Have a prescription?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-teal-50/90">
              Skip the search — send us a photo and our pharmacists will prepare
              your exact order.
            </p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-white transition-transform group-hover:translate-x-1">
              Upload now <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
