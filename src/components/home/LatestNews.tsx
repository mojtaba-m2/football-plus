import Image from "next/image";
import Container from "../Container";
import NewsCard from "../cards/NewsCard";

function LatestNews() {
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
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LatestNews;
