import AifiToken from "@/components/aifiToken";
import Artidevelopment from "@/components/artidevelopment";
import Hero from "@/components/hero";
import aifitokenimg from "@/public/images/aifitokenimg.png";
import heroShape from "@/public/images/heroShape.png";
import developmentimg from "@/public/images/developmentimg1.png";
import developmentimg2 from "@/public/images/developmentimg2.png";
import divider from "@/public/images/divider.png";
import settingsImg from "@/public/images/settingsImg.png";
import Image from "next/image";
import Footer from "@/components/footer";
import AfiWorks from "@/components/afiWorks";

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

      <Image src={divider} className="w-full" />

      <div className="relative">
        <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
          <div className="absolute right-0 top-[2rem]">
            <Image src={settingsImg} />
          </div>
          <AfiWorks />
        </main>
      </div>

      <Image src={divider} className="w-full my-8 lg:my-20" />

      <div className="relative">
        <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
          <div className="absolute right-0 top-[2rem]">
            <Image src={aifitokenimg} />
          </div>
          <AifiToken />
        </main>
      </div>

      <Image src={divider} className="w-full my-8 lg:my-20" />

      <div className="relative">
        <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
          <div className="absolute left-0 ">
            <Image src={developmentimg} />
          </div>
          <div className="absolute right-0 top-[-4rem]">
            <Image src={developmentimg2} />
          </div>
          <Artidevelopment />
        </main>
      </div>

      <Image src={divider} className="w-full my-8 lg:my-20" />

      <main className="max-w-[1536px] mx-auto max-[1536px]:px-4">
        <Footer />
      </main>
    </>
  );
}
