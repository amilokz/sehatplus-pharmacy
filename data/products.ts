export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number; // PKR
  unit: string;
  rx: boolean; // requires prescription
  tag?: string;
}

export type Category =
  | "Prescription"
  | "Vitamins"
  | "Baby Care"
  | "Personal Care"
  | "Devices";

export const CATEGORIES: Category[] = [
  "Prescription",
  "Vitamins",
  "Baby Care",
  "Personal Care",
  "Devices",
];

export const WHATSAPP_NUMBER = "923001234567";

export function waLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function orderLink(p: Product): string {
  return waLink(
    `Assalam-o-Alaikum SehatPlus! I would like to order:\n\n${p.name} (${p.unit})\nPrice: ${formatPKR(p.price)}\n\nPlease confirm availability. Thank you!`,
  );
}

export function formatPKR(n: number): string {
  return "Rs " + n.toLocaleString("en-US");
}

export const PRODUCTS: Product[] = [
  // Prescription
  { id: "para-500", name: "Paracetamol 500mg Tablets", category: "Prescription", price: 180, unit: "100 tablets", rx: true },
  { id: "ibu-400", name: "Ibuprofen 400mg Tablets", category: "Prescription", price: 240, unit: "50 tablets", rx: true },
  { id: "ome-20", name: "Omeprazole 20mg Capsules", category: "Prescription", price: 320, unit: "30 capsules", rx: true, tag: "Best Seller" },
  { id: "cet-10", name: "Cetirizine 10mg Tablets", category: "Prescription", price: 150, unit: "50 tablets", rx: true },
  // Vitamins
  { id: "vitc-1000", name: "Vitamin C 1000mg Effervescent", category: "Vitamins", price: 850, unit: "20 tablets", rx: false, tag: "Immunity" },
  { id: "multi-daily", name: "Daily Multivitamin Complex", category: "Vitamins", price: 1200, unit: "60 tablets", rx: false },
  { id: "vitd3", name: "Vitamin D3 2000 IU Softgels", category: "Vitamins", price: 950, unit: "90 softgels", rx: false },
  { id: "cal-mag", name: "Calcium + Magnesium + Zinc", category: "Vitamins", price: 1100, unit: "60 tablets", rx: false },
  // Baby Care
  { id: "diapers-nb", name: "Baby Diapers — Newborn", category: "Baby Care", price: 1450, unit: "44 pieces", rx: false, tag: "Popular" },
  { id: "baby-lotion", name: "Gentle Baby Lotion", category: "Baby Care", price: 680, unit: "200 ml", rx: false },
  { id: "formula-1", name: "Infant Formula Stage 1", category: "Baby Care", price: 2350, unit: "400 g", rx: false },
  // Personal Care
  { id: "handwash", name: "Antibacterial Hand Wash", category: "Personal Care", price: 420, unit: "250 ml", rx: false },
  { id: "shampoo", name: "Herbal Repair Shampoo", category: "Personal Care", price: 750, unit: "400 ml", rx: false },
  { id: "sunscreen", name: "Sunscreen Lotion SPF 50", category: "Personal Care", price: 1350, unit: "100 ml", rx: false, tag: "Summer Essential" },
  // Devices
  { id: "thermo", name: "Digital Thermometer", category: "Devices", price: 550, unit: "1 piece", rx: false },
  { id: "bp-monitor", name: "Upper-Arm BP Monitor", category: "Devices", price: 4850, unit: "1 piece", rx: false, tag: "Best Seller" },
  { id: "oximeter", name: "Fingertip Pulse Oximeter", category: "Devices", price: 1950, unit: "1 piece", rx: false },
  { id: "nebulizer", name: "Compressor Nebulizer", category: "Devices", price: 6200, unit: "1 piece", rx: false },
];
