import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Foydalanuvchilar | Brand",
  description:
    "Brand platformasidagi barcha ro'yxatdan o'tgan foydalanuvchilarning toʻliq maʼlumotlari: email, telefon, manzil va kompaniya haqida.",
  keywords: ["foydalanuvchilar", "users", "Brand", "kontaktlar", "profil"],
  openGraph: {
    title: "Foydalanuvchilar | Brand",
    description:
      "Brand platformasidagi barcha foydalanuvchilar roʻyxati va ularning aloqa maʼlumotlari.",
    url: "https://sizning-domeningiz.com/users",
    siteName: "Brand",
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foydalanuvchilar | Brand",
    description:
      "Brand platformasidagi barcha foydalanuvchilar roʻyxati va ularning aloqa maʼlumotlari.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
