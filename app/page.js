import AifiToken from "@/components/aifiToken";
import Navbar from "@/components/navbar";
import aifitokenimg from "@/public/images/aifitokenimg.png";
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
    </>
  );
}
