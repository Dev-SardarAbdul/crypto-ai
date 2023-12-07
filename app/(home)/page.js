import AdditionalGoods from "./additionalGoods";
import Book from "./book";
import BookPrice from "./bookPrice";
import Gallery from "./gallery";
import Hero from "./hero";
import OrderBook from "./orderBook";
import PersonalizeBook from "./personalizeBook";
import PersonalizedBook from "./personalizedBook";
import SatisfiedCustomer from "./satisfiedCustomer";
import WhyBook from "./whyBook";

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
