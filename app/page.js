"use client";
import Hero from "@/components/hero";
import LoadingScreen from "@/components/loadingScreen";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import divider from "@/public/images/divider.png";
import divider2 from "@/public/images/divider2.png";

import blackDivider from "@/public/images/blackDivider.png";
import Image from "next/image";
import Scroll from "@/components/scroll";
import Tokenomics from "@/components/tokenomics";
import bottomDivider from "@/public/images/bottomDivider.png";
import Footer from "@/components/footer";

export default function Home() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(false);
    }, 30000);
  }, []);

  return (
    <div className={loaded ? "h-screen overflow-hidden" : "overflow-x-hidden"}>
      {loaded && <LoadingScreen />}
      <>
        <Navbar />
        <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
          <Hero loaded={loaded} />
        </main>
        <Image src={divider} alt="divider" className="w-full pb-[2rem]" />
        <Scroll />

        {/* <Image src={blackDivider} className="w-full" alt="divider" /> */}
        <Image src={divider2} className="w-full" alt="divider" />
        <div className="bg-[#EFC14E]">
          <main className="max-w-[1536px] mx-auto max-[1536px]:px-4 tokennomics-gradient">
            <Tokenomics />
          </main>
        </div>
        <Image src={bottomDivider} className="w-full" alt="divider" />

        <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
          <Footer />
        </main>
      </>
    </div>
  );
}
