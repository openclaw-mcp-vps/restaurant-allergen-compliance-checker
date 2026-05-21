import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AllergenGuard – Menu Allergen Compliance Checker",
  description: "Scan menus and recipes to flag allergen compliance issues, generate required disclosure statements, and track ingredient changes for restaurant chains."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6e4b1780-3762-4549-9544-53e889e3712a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
