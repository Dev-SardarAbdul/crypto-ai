import Image from "next/image";
import React from "react";
import blog2Img from "@/public/images/blog2Img.png";
import { cardData } from "@/data";
import BlogCard from "@/components/blogCard";
import Link from "next/link";

function Page() {
  return (
    <div className="py-12 main-container">
      <Image
        src={blog2Img}
        className="w-full max-h-[600px]  rounded-3xl border border-[#5B4DBE]"
        alt="Blog Details Main Image"
      />
      <h2 className="mt-12 text-xl font-medium text-white md:text-4xl">
        Exploring Ledger Hardware Wallets: A Guide to Ledger Nano S and Ledger
        Nano X
      </h2>
      <p className="mt-4 text-sm text-white md:text-base font-extralight ">
        In the dynamic landscape of cryptocurrency, securing digital assets is a
        top priority for investors and enthusiasts alike. Ledger, a renowned
        name in the realm of cryptocurrency hardware wallets, offers two notable
        models: the Ledger Nano S and the Ledger Nano X. This blog delves into
        the features, benefits, and differences between these two models,
        helping you choose the right Ledger wallet for your needs.
      </p>

      <h2 className="mt-12 text-base font-medium text-white md:text-2xl">
        Introduction to Ledger Hardware Wallets
      </h2>

      <p className="mt-4 text-sm text-white md:text-base font-extralight ">
        Ledger hardware wallets are designed to offer an optimal blend of
        security and convenience for storing cryptocurrency. These devices store
        the user's private keys in a secure chip, isolating them from
        internet-connected devices and potential online threats. Ledger's
        reputation for robust security measures has made it a popular choice
        among crypto users.
      </p>

      <h2 className="mt-12 text-base font-medium text-white md:text-2xl">
        Ledger Nano S: Compact and Cost-Effective
      </h2>

      <p className="mt-4 text-sm text-white md:text-base font-extralight ">
        The Ledger Nano S, the earlier model, is known for its affordability and
        straightforward design. It’s an ideal choice for those new to
        cryptocurrency or for users who prefer a simple, efficient way to secure
        their assets.
      </p>

      <h2 className="mt-12 text-base font-medium text-white md:text-2xl">
        Features of Ledger Nano S:
      </h2>

      <ul className="list-decimal">
        <li className="mt-4 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">Security:</strong> Built with a secure
          chip, the Ledger Nano S keeps your private keys offline and protected.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">Multi-Currency Support:</strong> It
          supports over 1,100 cryptocurrencies, including major ones like
          Bitcoin, Ethereum, and Litecoin.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">Compact Design:</strong> Its small
          size makes it easily portable.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium"> Easy-to-Use Interface:</strong> The
          device features a simple two-button design for navigation.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">Durability:</strong> Constructed with
          stainless steel, it offers a sturdy build.
        </li>
      </ul>

      <h2 className="mt-12 text-base font-medium text-white md:text-2xl">
        Benefits:
      </h2>

      <h2 className="mt-4 text-sm font-medium text-white md:text-xl">
        Affordability:
      </h2>

      <p className="text-sm text-white md:text-base font-extralight">
        Priced lower than many other hardware wallets, it’s an excellent
        entry-level option.
      </p>
      <h2 className="mt-4 text-sm font-medium text-white md:text-xl">
        High Security:
      </h2>

      <p className="text-sm text-white md:text-base font-extralight">
        Despite its low cost, it doesn’t compromise on security.
      </p>
      <h2 className="mt-4 text-sm font-medium text-white md:text-xl">
        User-Friendly:
      </h2>

      <p className="text-sm text-white md:text-base font-extralight">
        Ideal for beginners due to its straightforward interfaces
      </p>

      <h2 className="mt-12 text-base font-medium text-white md:text-2xl">
        Ledger Nano X: Advanced and Versatile
      </h2>

      <p className="text-sm text-white md:text-base font-extralight">
        The Ledger Nano X is the more advanced model, catering to users who
        require more flexibility and features from their hardware wallet.
      </p>

      <h2 className="mt-12 text-base font-medium text-white md:text-2xl">
        Features of Ledger Nano X:
      </h2>

      <ul className="list-decimal">
        <li className="mt-4 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium"> Enhanced Connectivity:</strong>{" "}
          Offers Bluetooth support, allowing for wireless management of your
          crypto assets.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">Larger Screen:</strong> Improved
          display for better visibility.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">Increased Storage: </strong> Can store
          up to 100 apps simultaneously, ideal for those who deal with a variety
          of cryptocurrencies.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium"> Rechargeable Battery: </strong>{" "}
          Includes a battery for on-the-go use.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">Mobile-Friendly: </strong> Compatible
          with Ledger Live Mobile app, enhancing usability with smartphones.
        </li>
      </ul>

      <h2 className="mt-12 text-base font-medium text-white md:text-2xl">
        Benefits:
      </h2>

      <h2 className="mt-4 text-sm font-medium text-white md:text-xl">
        Greater Convenience:
      </h2>

      <p className="text-sm text-white md:text-base font-extralight">
        Bluetooth connectivity and mobile app compatibility offer ease of use.
      </p>

      <h2 className="mt-4 text-sm font-medium text-white md:text-xl">
        Suitable for Diverse Portfolios:
      </h2>

      <p className="text-sm text-white md:text-base font-extralight">
        Ideal for users with a wide range of cryptocurrencies.
      </p>

      <h2 className="mt-4 text-sm font-medium text-white md:text-xl">
        Enhanced Capacity:
      </h2>

      <p className="text-sm text-white md:text-base font-extralight">
        More storage space for apps related to different cryptocurrencies.
      </p>

      <h2 className="mt-12 text-base font-medium text-white md:text-2xl">
        Comparing Ledger Nano S and Nano X:
      </h2>

      <ul className="list-decimal">
        <li className="mt-4 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium"> Connectivity:</strong> Nano X offers
          Bluetooth, while Nano S relies on a USB connection.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">Storage: </strong> Nano X can handle
          more apps simultaneously compared to Nano S.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">Portability: </strong> Both are
          portable, but Nano X offers more flexibility with its battery and
          Bluetooth features.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium"> Price: </strong> Nano S is more
          budget-friendly, whereas Nano X is a premium model.
        </li>
        <li className="mt-2 text-sm text-white md:text-base font-extralight">
          <strong className="font-medium">User Interface: </strong>Nano X has a
          larger screen, enhancing user experience.
        </li>
      </ul>

      <h2 className="mt-12 text-base font-medium text-white md:text-2xl">
        Conclusion
      </h2>

      <p className="text-sm text-white md:text-base font-extralight">
        Choosing between the Ledger Nano S and Nano X depends on your specific
        needs. If you're looking for a cost-effective, secure, and
        straightforward solution, the Ledger Nano S is a great choice. However,
        if you need a wallet that accommodates a wider range of currencies,
        offers wireless connectivity, and has a more advanced interface, the
        Ledger Nano X is the way to go. <br />
        Both models uphold Ledger's reputation for security and reliability,
        ensuring that regardless of your choice, your digital assets are in safe
        hands. In the end, the decision comes down to balancing your budget, the
        diversity of your portfolio, and your preference for certain features.
        Whichever model you choose, a Ledger wallet is a wise step towards
        securing your digital currency in the ever-expanding world of
        cryptocurrency.
      </p>

      <h2 className="mt-12 text-4xl font-medium text-white">Blogs</h2>

      <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
        {cardData.slice(0, 4).map((item) => (
          <Link href={item.route} key={item.id}>
            <BlogCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page;
