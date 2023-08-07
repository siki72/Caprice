import "./globals.css";
import type { Metadata } from "next";
import { Karla, Fira_Code, Libre_Baskerville } from "next/font/google";
import Nav from "./components/nav/Nav.tsx";
import Footer from "./components/footer/Footer.tsx";

const karla = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-karla",
});

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-fira",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Bijouterie Caprice",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${karla.variable} ${fira.variable} ${libre.variable}`}>
        <header>
          <Nav />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}