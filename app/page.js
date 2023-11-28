import AifiToken from "@/components/aifiToken";
import Hero from "@/components/hero";
import aifitokenimg from "@/public/images/aifitokenimg.png";
import heroShape from "@/public/images/heroShape.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative">
        <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
          <div className="absolute hidden lg:block right-0 top-[8rem]">
            <Image src={heroShape} />
          </div>

          <Hero />
        </main>
      </div>
      <div className="relative">
        <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
          <div className="absolute right-0 top-[2rem]">
            <Image src={aifitokenimg} />
          </div>
          <AifiToken />
        </main>
      </div>
    </>
  );
}
