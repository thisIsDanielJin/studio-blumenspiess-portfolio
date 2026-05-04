import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "studio.blumenspiess",
  description: "Portfolio website for Studio Blumenspiess",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
