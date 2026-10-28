import { Besley, Rubik } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik-src",
  subsets: ["latin"],
});

const besley = Besley({
  variable: "--font-besley-src",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "psmspices.com",
  description:
    "PSM Spices (Pole Star Masala) – authentic Indian spices and masalas from Delhi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rubik.variable} ${besley.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
