import SiteContentFooter from "@components/SiteContentFooter";
import SiteContentHeader from "@components/SiteContentHeader";
import "@styles/globals.css";
import local from "next/font/local";

const Circular = local({ src: "../public/fonts/Circular Std Book.woff2" });

export const metadata = {
  title: "Holiday Homes & Apartment Rentals -Airbnb",
  description:
    "Place where you can rent homes or apartments on your holiday place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Circular.className}>
        <SiteContentHeader />
        {children}
        <SiteContentFooter />
      </body>
    </html>
  );
}
