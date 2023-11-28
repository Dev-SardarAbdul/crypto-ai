import AifiToken from "@/components/aifiToken";
import Artidevelopment from "@/components/artidevelopment";
import Navbar from "@/components/navbar";
import aifitokenimg from "@/public/images/aifitokenimg.png";
import developmentimg from "@/public/images/developmentimg1.png";
import developmentimg2 from "@/public/images/developmentimg2.png";

import Image from "next/image";
export default function Home() {
  return (
    <>
      <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
        <Navbar />
      </main>
      <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
        <div className="absolute right-0 top-[2rem]">
          <Image src={aifitokenimg} />
        </div>
        <AifiToken />
      </main>
      <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
        <div className="absolute left-0">
          <Image src={developmentimg} />
        </div>
        <div className="absolute right-0">
          <Image src={developmentimg2} />
        </div>
        <Artidevelopment />
      </main>
    </>
  );
}
