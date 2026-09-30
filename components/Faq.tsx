"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Do I need a prescription to order?",
    a: "Only for prescription (Rx) medicines — you can upload a photo of your prescription on WhatsApp and our pharmacists will verify it. Vitamins, baby care, personal care and devices can be ordered directly.",
  },
  {
    q: "Are your medicines 100% genuine?",
    a: "Yes. We source exclusively from licensed distributors, every batch is checked by our PMC-registered pharmacists, and all products are stored in temperature-controlled conditions.",
  },
  {
    q: "How fast is delivery?",
    a: "Express 60-minute delivery is available in Islamabad, Rawalpindi, Lahore and Karachi during pharmacy hours. Standard delivery to other cities takes 1–2 working days.",
  },
  {
    q: "How do I pay?",
    a: "Cash on delivery, bank transfer, or debit/credit card on delivery. You only pay when your medicines arrive — no advance needed.",
  },
  {
    q: "Is my prescription information private?",
    a: "Absolutely. Prescriptions are seen only by our licensed pharmacists, orders are packed in plain tamper-proof packaging, and your data is never shared.",
  },
  {
    q: "What if my medicine is not in your store?",
    a: "Send us the name or your prescription on WhatsApp — we can source 5,000+ medicines on request, usually within 24 hours.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-teal-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-teal-600">
            FAQ
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Questions, <span className="text-heal">Answered</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                  isOpen
                    ? "border-teal-600/30 shadow-lg shadow-teal-900/5"
                    : "border-teal-900/10"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-slate-900">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "rotate-45 bg-teal-600 text-white"
                        : "bg-teal-50 text-teal-700"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
