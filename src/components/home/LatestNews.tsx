import Image from "next/image";
import Container from "../Container";
import NewsCard from "../cards/NewsCard";

export interface INewsData {
  id?: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
}

async function LatestNews() {
  const response = await fetch("http://localhost:8000/news");

  const data = (await response.json()) as INewsData[];

  console.log(data);

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
            {data.map((item: INewsData) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LatestNews;
