import localFont from "next/font/local";

export const lora = localFont({
  src: [
    { path: "../public/assets/fonts/Lora-400.woff2", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/Lora-400i.woff2", weight: "400", style: "italic" },
    { path: "../public/assets/fonts/Lora-500.woff2", weight: "500", style: "normal" },
    { path: "../public/assets/fonts/Lora-600.woff2", weight: "600", style: "normal" },
    { path: "../public/assets/fonts/Lora-600i.woff2", weight: "600", style: "italic" },
    { path: "../public/assets/fonts/Lora-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-lora",
  display: "swap",
});

export const nunitoSans = localFont({
  src: [
    { path: "../public/assets/fonts/NunitoSans-400.woff2", weight: "400", style: "normal" },
    { path: "../public/assets/fonts/NunitoSans-400i.woff2", weight: "400", style: "italic" },
    { path: "../public/assets/fonts/NunitoSans-600.woff2", weight: "600", style: "normal" },
    { path: "../public/assets/fonts/NunitoSans-700.woff2", weight: "700", style: "normal" },
    { path: "../public/assets/fonts/NunitoSans-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-nunito",
  display: "swap",
});
