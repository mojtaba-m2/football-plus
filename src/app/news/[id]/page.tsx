import { INewsData } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

interface INewsDetailProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function NewsDetail(props: INewsDetailProps) {
  const { id } = await props.params;

  console.log(id);

  const response = await fetch(`http://localhost:8000/news/${id}`);

  const data = (await response.json()) as INewsData;

  console.log(data);

  return (
    <div>
      <h1 className="text-center my-6 md:text-xl lg:text-2xl">{data.title}</h1>

      <div className="flex justify-center items-center gap-6 md:gap-20">
        <h3>{data.category}</h3>
        <span>{data.date}</span>
      </div>

      <figure className="bg-gray-200 my-8">
        <Image
          src={data.image}
          alt={data.title}
          width={500}
          height={300}
          className="mx-auto w-full max-w-125 h-auto"
        />
      </figure>

      <div className="max-w-4xl mx-auto px-4">
        <p className="text-base leading-8 text-gray-700 md:text-lg">
          {data.description}
        </p>
      </div>

      <div className="flex justify-center my-8 lg:text-xl">
        <Link href={"/news"} className="bg-green-600 text-white p-2 rounded">
          بازگشت به اخبار
        </Link>
      </div>
    </div>
  );
}

export default NewsDetail;
