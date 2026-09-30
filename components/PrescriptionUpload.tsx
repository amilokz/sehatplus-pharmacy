"use client";

import { useState } from "react";
import Image from "next/image";
import {
  UploadCloud,
  MessageCircle,
  CheckCircle2,
  FileImage,
  ShieldCheck,
} from "lucide-react";
import { waLink } from "@/data/products";

const STEPS = [
  "Take a clear photo of your prescription",
  "Tap the button below — it opens WhatsApp",
  "Attach the photo in the chat and hit send",
];

export default function PrescriptionUpload() {
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <section id="prescription" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-teal-100 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* image side */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl shadow-teal-900/15">
            <Image
              src="/img-pharmacist.webp"
              alt="SehatPlus pharmacist consulting a customer"
              width={900}
              height={1100}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl p-5 shadow-xl sm:left-10 sm:right-auto">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100">
              <ShieldCheck className="h-6 w-6 text-emerald-700" />
            </span>
            <div>
              <p className="text-sm font-extrabold text-slate-900">
                Verified by licensed pharmacists
              </p>
              <p className="text-xs text-slate-500">
                Every prescription is double-checked before packing
              </p>
            </div>
          </div>
        </div>

        {/* content side */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-teal-600">
            Prescription Orders
          </p>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Upload Your <span className="text-heal">Prescription</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            No need to type long medicine names. Send us your doctor&apos;s
            prescription and our pharmacists will call you back with the exact
            medicines, best prices and delivery time.
          </p>

          <ol className="mt-6 space-y-3">
            {STEPS.map((s, i) => (
              <li key={s} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600 text-xs font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="pt-1 text-sm font-semibold text-slate-700">
                  {s}
                </span>
              </li>
            ))}
          </ol>

          {/* file picker */}
          <label
            htmlFor="rx-upload"
            className="mt-8 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-teal-600/30 bg-teal-50/60 px-6 py-8 text-center transition-all hover:border-teal-600/60 hover:bg-teal-50"
          >
            {fileName ? (
              <>
                <FileImage className="h-10 w-10 text-teal-600" />
                <p className="mt-3 text-sm font-bold text-slate-900">
                  {fileName}
                </p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" /> Ready — tap below to
                  send via WhatsApp
                </p>
              </>
            ) : (
              <>
                <UploadCloud className="h-10 w-10 text-teal-600" />
                <p className="mt-3 text-sm font-bold text-slate-900">
                  Choose prescription photo
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  JPG, PNG or PDF — max 10 MB
                </p>
              </>
            )}
            <input
              id="rx-upload"
              type="file"
              accept="image/*,.pdf"
              className="hidden"
              onChange={(e) =>
                setFileName(e.target.files?.[0]?.name ?? null)
              }
            />
          </label>

          <a
            href={waLink(
              "Assalam-o-Alaikum SehatPlus! I want to order medicines with my prescription (photo attached in chat). Please call me back. Thank you!",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-emerald-600/25 transition-all hover:bg-emerald-700"
          >
            <MessageCircle className="h-5 w-5" />
            Send Prescription on WhatsApp
          </a>
          <p className="mt-3 text-center text-xs text-slate-500">
            Your prescription stays private — shared only with our pharmacists.
          </p>
        </div>
      </div>
    </section>
  );
}
