import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VAP-TAMP",
  description:
    "Robot Planning and Situation Handling with Active Perception. Accepted to IROS 2026. Best Paper Award \u2014 Full-Shift Robot Co-Workers Workshop, IROS 2026.",
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
