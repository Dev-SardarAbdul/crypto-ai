import BlogCard from "@/components/blogCard";
import { cardData } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 main-container">
      <h2 className="text-4xl font-medium text-white">Blogs</h2>
      <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
        {cardData.map((item) => (
          <Link href={item.route} key={item.id}>
            <BlogCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
