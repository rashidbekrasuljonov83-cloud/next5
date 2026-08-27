import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import React from "react";

export const metadata = {
  title: "GlowBeauty — Ayollar kosmetikasi va parvarish vositalari",
  description:
    "Tabiiy va original ayollar kosmetikasi. Yuz, soch va tana parvarishi uchun sifatli mahsulotlar hamda pardoz vositalarini qulay narxlarda xarid qiling.",
  keywords: [
    "ayollar kosmetikasi",
    "yuz parvarishi",
    "makiyaj",
    "koreys kosmetikasi",
    "tabiiy krem",
  ],
  openGraph: {
    title: "GlowBeauty — Ayollar kosmetikasi va parvarish vositalari",
    description:
      "Original va sifatli ayollar kosmetika mahsulotlari internet do'koni.",
    url: "https://sizningsayt.uz",
    siteName: "GlowBeauty",
    images: [
      {
        url: "https://sizningsayt.uz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayollar kosmetikasi GlowBeauty",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
};
export default async function Product() {
  let res = await fetch("https://dummyjson.com/products");
  let products = await res.json();
  console.log(products);

  return (
    <div>
      <Navbar />
      <div className=" px-25 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
        {products.products.map((prod) => {
          return <ProductCard key={prod.id} product={prod} />;
        })}
      </div>
    </div>
  );
}
