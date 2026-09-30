"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, FileWarning } from "lucide-react";
import {
  CATEGORIES,
  PRODUCTS,
  formatPKR,
  orderLink,
  type Category,
} from "@/data/products";

type Filter = "All" | Category;

export default function Catalog() {
  const [filter, setFilter] = useState<Filter>("All");
  const items =
    filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="shop" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-teal-600">
            Online Store
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Shop <span className="text-heal">Health Essentials</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Every product is sourced from licensed distributors and checked by
            our pharmacists before dispatch.
          </p>
        </div>

        {/* category tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {(["All", ...CATEGORIES] as Filter[]).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                filter === c
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-600/25"
                  : "border border-teal-900/10 bg-teal-50/50 text-slate-600 hover:border-teal-600/40 hover:text-teal-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <article
              key={p.id}
              className="card-lift flex flex-col rounded-2xl border border-teal-900/10 bg-white p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-teal-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-teal-700">
                  {p.category}
                </span>
                {p.tag && (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                    {p.tag}
                  </span>
                )}
              </div>
              <h3 className="font-display text-base font-bold leading-snug text-slate-900">
                {p.name}
              </h3>
              <p className="mt-1 text-xs font-semibold text-slate-500">
                {p.unit}
              </p>
              {p.rx && (
                <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-600">
                  <FileWarning className="h-3.5 w-3.5" />
                  Prescription required
                </p>
              )}
              <div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-4">
                <div>
                  <div className="font-display text-2xl font-extrabold text-teal-700">
                    {formatPKR(p.price)}
                  </div>
                </div>
              </div>
              <a
                href={orderLink(p)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/25"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
            </article>
          ))}
        </div>

        {/* shelves banner */}
        <div className="relative mt-14 overflow-hidden rounded-3xl">
          <Image
            src="/img-shelves.webp"
            alt="Neatly stocked SehatPlus pharmacy shelves"
            width={1600}
            height={500}
            className="h-56 w-full object-cover sm:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/85 via-teal-900/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12">
            <h3 className="max-w-md font-display text-2xl font-extrabold text-white sm:text-3xl">
              Can&apos;t find your medicine?
            </h3>
            <p className="mt-2 max-w-md text-sm text-teal-50/90">
              Send us the name or a photo of your prescription — we source
              5,000+ medicines on request.
            </p>
            <a
              href="#prescription"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-800 transition-transform hover:scale-105"
            >
              Upload Prescription
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
