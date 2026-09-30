"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Search,
  MessageCircle,
  ShieldCheck,
  Truck,
  Star,
  BadgeCheck,
} from "lucide-react";
import { PRODUCTS, formatPKR, orderLink } from "@/data/products";

const QUICK = ["Vitamin C", "BP Monitor", "Baby Diapers", "Thermometer"];

const STATS = [
  { icon: Truck, value: "60-min", label: "Express delivery" },
  { icon: ShieldCheck, value: "100%", label: "Genuine medicines" },
  { icon: BadgeCheck, value: "50,000+", label: "Orders delivered" },
  { icon: Star, value: "4.9/5", label: "Customer rating" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (t.length < 2) return [];
    return PRODUCTS.filter((p) => p.name.toLowerCase().includes(t)).slice(
      0,
      6,
    );
  }, [q]);

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* cinematic video backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/hero.mp4"
          poster="/img-shelves.webp"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* soft white/teal readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/80 via-transparent to-emerald-50/60" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-teal-600/20 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-700 shadow-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Licensed Online Pharmacy — Pakistan
        </div>

        <h1 className="animate-rise mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 [animation-delay:120ms] sm:text-6xl lg:text-7xl">
          Your Medicines,
          <br />
          <span className="text-heal">Delivered with Care.</span>
        </h1>

        <p className="animate-rise mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 [animation-delay:220ms]">
          Order genuine medicines, vitamins and everyday health essentials
          online. Upload your prescription or search below — our licensed
          pharmacists handle the rest, right to your doorstep.
        </p>

        {/* medicine search */}
        <div className="animate-rise relative mt-9 w-full max-w-2xl [animation-delay:320ms]">
          <div className="flex items-center gap-2 rounded-2xl border border-teal-900/10 bg-white p-2 pl-5 shadow-[0_20px_60px_-20px_rgba(13,148,136,0.35)]">
            <Search className="h-5 w-5 shrink-0 text-teal-600" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search medicines… e.g. Vitamin C, Thermometer"
              className="w-full bg-transparent py-3 text-base text-slate-900 outline-none placeholder:text-slate-400"
              aria-label="Search medicines"
            />
            <a
              href="#shop"
              className="hidden shrink-0 items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-700 sm:inline-flex"
            >
              Search
            </a>
          </div>

          {results.length > 0 && (
            <div className="absolute inset-x-0 top-full z-20 mt-2 overflow-hidden rounded-2xl border border-teal-900/10 bg-white text-left shadow-2xl">
              {results.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-3 last:border-0 transition-colors hover:bg-teal-50/60"
                >
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">
                      {p.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {p.unit} · {formatPKR(p.price)}
                    </p>
                  </div>
                  <a
                    href={orderLink(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Order
                  </a>
                </div>
              ))}
            </div>
          )}
          {q.trim().length >= 2 && results.length === 0 && (
            <div className="absolute inset-x-0 top-full z-20 mt-2 rounded-2xl border border-teal-900/10 bg-white px-5 py-4 text-left text-sm text-slate-600 shadow-2xl">
              No match found —{" "}
              <a
                href="#prescription"
                className="font-bold text-teal-700 underline"
              >
                send us your prescription
              </a>{" "}
              and we will arrange it for you.
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-500">
              Popular:
            </span>
            {QUICK.map((term) => (
              <button
                key={term}
                onClick={() => setQ(term)}
                className="rounded-full border border-teal-600/20 bg-white/80 px-4 py-1.5 text-xs font-bold text-teal-700 backdrop-blur transition-all hover:border-teal-600/50 hover:bg-teal-50"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* stats */}
        <div className="animate-rise mt-12 grid w-full max-w-4xl grid-cols-2 gap-4 [animation-delay:420ms] lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="card-lift glass rounded-2xl p-5 text-center"
            >
              <s.icon className="mx-auto h-6 w-6 text-teal-600" />
              <div className="mt-2 font-display text-2xl font-extrabold text-slate-900">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
