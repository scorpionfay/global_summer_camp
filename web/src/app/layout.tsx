import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Kids Camp Finder",
  description:
    "Find short-term international camps and school programs for toddlers and kids worldwide — perfect for travelling parents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
