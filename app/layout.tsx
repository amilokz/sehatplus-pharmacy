import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SehatPlus — Online Pharmacy in Pakistan | Order Medicines Online",
  description:
    "SehatPlus is Pakistan's trusted online pharmacy. Order genuine medicines, vitamins and health essentials online with fast doorstep delivery. Upload your prescription on WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans`}>{children}</body>
    </html>
  );
}
