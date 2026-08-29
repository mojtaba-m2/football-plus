import Image from "next/image";
import Container from "../Container";
import NewsCard from "../cards/NewsCard";
import { INewsData } from "@/types/news";
import Link from "next/link";

async function LatestNews() {
  const response = await fetch("http://localhost:8000/news");

  const allData = (await response.json()) as INewsData[];

  const data = allData.slice(0, 6);
  return (
    <div className="relative p-4 mt-8 md:mt-20">
      <Image
        className="object-cover"
        src={"/newsBackground.jpg"}
        alt="newsImage"
        fill
      />

      <div className="absolute inset-0 bg-black/60"></div>
      <Container>
        <div className="relative z-10">
          <h1 className="text-xl mb-6 text-white md:text-2xl md:mt-5 md:mx-6 lg:text-3xl lg:my-10 ">
            آخرین اخبار
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10 lg:grid-cols-4 lg:gap-10">
            {data.map((item: INewsData, index) => (
              <Link key={item.id} href={`/news/${item.id}`} className="h-full">
                <NewsCard
                  {...item}
                  className={`${index >= 3 ? "hidden md:block" : ""} shadow-[0px_12px_45px_rgba(255,255,255,0.45)]`}
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LatestNews;
