import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import RootProviders from "./RootProviders";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Typed - Resource List",
  description: "Typed FE Engineer 기술과제",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
