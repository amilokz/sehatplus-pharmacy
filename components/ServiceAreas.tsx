import { MapPin, Clock, PhoneCall } from "lucide-react";
import { waLink } from "@/data/products";

const AREAS = [
  { city: "Islamabad", detail: "All sectors · 60-min delivery" },
  { city: "Rawalpindi", detail: "Saddar, DHA, Bahria & more" },
  { city: "Lahore", detail: "DHA, Gulberg, Model Town" },
  { city: "Karachi", detail: "Clifton, DHA, Gulshan" },
];

const TIMINGS = [
  { days: "Monday – Saturday", hours: "9:00 AM – 11:00 PM" },
  { days: "Sunday", hours: "10:00 AM – 8:00 PM" },
  { days: "WhatsApp orders", hours: "24 / 7" },
];

export default function ServiceAreas() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-teal-600">
            Coverage
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            We Deliver <span className="text-heal">Near You</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* areas */}
          <div className="rounded-3xl border border-teal-900/10 bg-gradient-to-br from-teal-50 to-emerald-50/60 p-8">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold text-slate-900">
              <MapPin className="h-5 w-5 text-teal-600" /> Service Areas
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {AREAS.map((a) => (
                <div
                  key={a.city}
                  className="card-lift rounded-2xl border border-teal-900/10 bg-white p-5"
                >
                  <p className="font-display text-lg font-bold text-slate-900">
                    {a.city}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {a.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-600">
              Outside these areas?{" "}
              <a
                href={waLink(
                  "Assalam-o-Alaikum SehatPlus! Do you deliver to my area?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-teal-700 underline"
              >
                Ask us on WhatsApp
              </a>{" "}
              — we are expanding every month.
            </p>
          </div>

          {/* timings */}
          <div className="rounded-3xl bg-teal-950 p-8 text-white">
            <h3 className="flex items-center gap-2 font-display text-xl font-bold">
              <Clock className="h-5 w-5 text-teal-300" /> Pharmacy Timings
            </h3>
            <div className="mt-6 space-y-4">
              {TIMINGS.map((t) => (
                <div
                  key={t.days}
                  className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0"
                >
                  <span className="text-sm font-semibold text-teal-100/80">
                    {t.days}
                  </span>
                  <span className="font-display text-lg font-bold text-white">
                    {t.hours}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={waLink(
                "Assalam-o-Alaikum SehatPlus! I need urgent medicine delivery.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-base font-bold text-white transition-all hover:bg-emerald-400"
            >
              <PhoneCall className="h-5 w-5" />
              Urgent? Call / WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
