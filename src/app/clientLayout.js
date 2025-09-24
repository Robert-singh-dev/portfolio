"use client";
import { useEffect } from "react";
import { initTextAnimations } from "@/app/utils/textAnimation";
import { Aboreto, Afacad } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home/css/global.css";
import "./home/css/varibles.css";
import "./home/css/utilities.css";
import "./home/css/header.css";
import "./home/css/home.css";

const aboreto = Aboreto({ subsets: ["latin"], weight: ["400"], variable: "--font-primary" });
const afacad = Afacad({ subsets: ["latin"], weight: ["400","500","700"], variable: "--font-secondary" });

export default function ClientLayout({ children }) {
  useEffect(() => {
    initTextAnimations();
  }, []);

  return (
    <body className={`${aboreto.variable} ${afacad.variable}`}>
      {children}
    </body>
  );
}
