import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dodo Food | Food Delivery",
  description: "Simple food delivery landing page with app downloads and partner sign-up.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
