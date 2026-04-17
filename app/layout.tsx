import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PenTest Lab",
  description: "Ethical Hacking and Penetration Testing Code Snippets",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
