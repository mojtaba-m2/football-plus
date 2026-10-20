import getNews from "@/api/news";
import NewsCard from "@/components/cards/NewsCard";
import Container from "@/components/Container";
import { INewsData } from "@/types/news";
import Link from "next/link";

export const revalidate = 300;

async function NewsPage() {
  const data = await getNews();

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
