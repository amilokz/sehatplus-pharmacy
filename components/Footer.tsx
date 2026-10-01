import { Cross, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { waLink, CATEGORIES } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-teal-100/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500">
                <Cross className="h-5 w-5 text-white" strokeWidth={3} />
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                Sehat<span className="text-teal-300">Plus</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Pakistan&apos;s trusted online pharmacy — genuine medicines,
              licensed pharmacists and 60-minute delivery, right to your
              doorstep.
            </p>
            <a
              href={waLink(
                "Assalam-o-Alaikum SehatPlus! I would like to order medicines.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-emerald-400"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["Shop Medicines", "#shop"],
                ["Categories", "#categories"],
                ["Upload Prescription", "#prescription"],
                ["How It Works", "#how-it-works"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Categories
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c}>
                  <a href="#shop" className="transition-colors hover:text-white">
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                Blue Area, Islamabad, Pakistan
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                Mon–Sat: 9 AM – 11 PM · Sun: 10 AM – 8 PM
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                hello@sehatplus.pk
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs leading-relaxed text-teal-100/50">
          <p>
            © 2026 SehatPlus. All rights reserved. Demo website — SehatPlus is
            a fictional business created for demonstration purposes. Designed
            &amp; built by <a href="https://akclnt.com" className="hover:text-white">AKCLNT</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
