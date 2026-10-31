import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wainaina Paints | Professional Painting Services in Meru",
  description:
    "Wainaina Paints offers professional interior painting, exterior painting, repainting and decorative finishes in Meru, Kenya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}