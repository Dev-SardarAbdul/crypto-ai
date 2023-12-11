import AdditionalGoods from "./(home)/additionalGoods";
import Book from "./(home)/book";
import BookPrice from "./(home)/bookPrice";
import Gallery from "./(home)/gallery";
import Hero from "./(home)/hero";
import OrderBook from "./(home)/orderBook";
import PersonalizeBook from "./(home)/personalizeBook";
import PersonalizedBook from "./(home)/personalizedBook";
import SatisfiedCustomer from "./(home)/satisfiedCustomer";
import WhyBook from "./(home)/whyBook";

export default function Home() {
  return (
    <div className="overflow-x-hidden pb-[4rem]">
      <Hero />
      <OrderBook />
      <PersonalizedBook />
      <Book />
      <AdditionalGoods />
      <Gallery />
      <BookPrice />
      <WhyBook />
      <PersonalizeBook />
      <SatisfiedCustomer />
    </div>
  );
}
