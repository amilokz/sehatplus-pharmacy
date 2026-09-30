import { Search, FileUp, Bike } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    step: "Step 1",
    title: "Search or send prescription",
    desc: "Find your medicine in our store, or send a photo of your prescription on WhatsApp.",
  },
  {
    icon: FileUp,
    step: "Step 2",
    title: "Pharmacist verifies",
    desc: "A licensed pharmacist confirms your order, checks dosage and calls you if anything is unclear.",
  },
  {
    icon: Bike,
    step: "Step 3",
    title: "Fast doorstep delivery",
    desc: "Medicines packed discreetly and delivered in as little as 60 minutes. Pay cash or online.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-gradient-to-b from-teal-950 via-teal-900 to-emerald-950 py-20 sm:py-28">
      <div
        className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-teal-400/15 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-teal-300">
            Simple Process
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Ordering in <span className="bg-gradient-to-r from-teal-200 to-emerald-300 bg-clip-text text-transparent">3 Easy Steps</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-teal-100/80">
            From prescription to doorstep — designed to be effortless, even for
            first-time online shoppers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur transition-all hover:border-teal-300/30 hover:bg-white/[0.09]"
            >
              <span
                className="pointer-events-none absolute right-6 top-4 font-display text-7xl font-extrabold text-white/[0.07]"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 shadow-lg shadow-emerald-500/25">
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-teal-300">
                {s.step}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-teal-100/75">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
