import Image from "next/image";
import { INewsData } from "../home/LatestNews";

function NewsCard({ image, category, title, description, date }: INewsData) {
  return (
    <article className="flex flex-col bg-white w-full  shadow-[0px_12px_45px_rgba(255,255,255,0.45)]">
      <figure className="relative w-full h-36">
        <Image
          className="object-cover object-center"
          src={image}
          alt="newsImage"
          fill
        />
      </figure>
      <div className="flex flex-1 flex-col justify-between items-start p-3">
        <span className="text-sm text-green-600 md:text-xl">{category}</span>

        <h3 className="font-bold lg:text-xl"> {title}</h3>

        <p className="text-gray-600 lg:font-bold line-clamp-2">{description}</p>

        <time className="text-gray-600">{date}</time>
      </div>
    </article>
  );
}

export default NewsCard;
