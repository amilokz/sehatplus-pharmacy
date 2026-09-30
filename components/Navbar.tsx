"use client";

import { useState } from "react";
import { Cross, Menu, X, MessageCircle } from "lucide-react";
import { waLink } from "@/data/products";

const LINKS = [
  { label: "Shop", href: "#shop" },
  { label: "Categories", href: "#categories" },
  { label: "Upload Prescription", href: "#prescription" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-teal-900/10 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg shadow-teal-500/25">
            <Cross className="h-5 w-5 text-white" strokeWidth={3} />
          </span>
          <span className="font-display text-xl font-extrabold tracking-tight text-slate-900">
            Sehat<span className="text-heal">Plus</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-teal-700"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={waLink(
              "Assalam-o-Alaikum SehatPlus! I would like to order medicines.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-teal-600/25 transition-all hover:bg-teal-700 hover:shadow-teal-600/40 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl p-2 text-slate-700 transition-colors hover:bg-teal-50 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-teal-900/10 bg-white/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink(
                "Assalam-o-Alaikum SehatPlus! I would like to order medicines.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-4 py-3 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
