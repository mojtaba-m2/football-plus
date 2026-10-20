import { INewsData } from "@/types/news";

async function getNews(): Promise<INewsData[]> {
  const responseNewsData = await fetch("http://localhost:8000/news", {
    next: { revalidate: 300 },
  });

  if (!responseNewsData.ok) {
    throw new Error("دریافت اخبار ناموفق بود");
  }

  return responseNewsData.json();
}

export default getNews;
