import "bootstrap/dist/css/bootstrap.min.css";
import "./home/css/global.css";
import "./home/css/varibles.css";
import "./home/css/utilities.css";
import "./home/css/header.css";
import "./home/css/home.css";
import { Aboreto, Afacad } from "next/font/google";

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio site",
};

// Load Google Fonts
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"], // Aboreto has only one weight
  variable: "--font-primary", // map to CSS variable
});

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // pick what you need
  variable: "--font-secondary",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${aboreto.variable} ${afacad.variable}`}>
        {children}
      </body>
    </html>
  );
}
