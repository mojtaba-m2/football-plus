import NewsCard from "@/components/cards/NewsCard";
import Container from "@/components/Container";
import { INewsData } from "@/types/news";
import Link from "next/link";

async function NewsPage() {
  const response = await fetch("http://localhost:8000/news");

  const data = (await response.json()) as INewsData[];

  return (
    <div className="min-h-screen bg-gray-200">
      <Container>
        <h1 className="text-center py-6 md:text-xl lg:text-2xl">
          کامل ترین اخبار فوتبالی از سراسر جهان
        </h1>

        <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <Link key={item.id} href={`/news/${item.id}`}>
              <NewsCard
                {...item}
                className="shadow-[0px_8px_30px_rgba(0,0,0,0.20)]"
              />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default NewsPage;
