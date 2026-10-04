import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"], variable: "--font", display: "swap" });
const title = "Xean Digital — One Digital Ecosystem";
const description =
  "Xean Digital adalah ekosistem digital yang menghubungkan berbagai platform, tools, layanan, komunitas, dan kebutuhan digital dalam satu tempat.";

export const metadata: Metadata = {
  metadataBase: new URL("https://xeandigital.web.id"),
  title,
  description,
  alternates: { canonical: "https://xeandigital.web.id" },
  robots: { index: true, follow: true },
  openGraph: { title, description, url: "https://xeandigital.web.id", siteName: "Xean Digital", locale: "id_ID", type: "website" },
  twitter: { card: "summary", title, description },
};
export const viewport: Viewport = { themeColor: "#f6f1e7" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
