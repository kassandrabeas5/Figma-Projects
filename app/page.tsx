"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/page";
import Hero from "./components/Hero/page";
import Promo from "./components/Promo/page";



export default function Home() {
  return (
   <>
   <Promo />
   <Navbar />
   <Hero />
   </>
    
  );
}
