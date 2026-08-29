import Image from "next/image";
import { INewsData } from "@/types/news";

interface INewsCardProps extends INewsData {
  className?: string;
}

function NewsCard({
  image,
  category,
  title,
  description,
  date,
  className,
}: INewsCardProps) {
  return (
    <article className={`flex flex-col h-full bg-white w-full ${className}`}>
      <figure className="relative w-full aspect-square">
        <Image
          className="object-cover object-center"
          src={image}
          alt={title}
          fill
        />
      </figure>
      <div className="flex flex-1 flex-col justify-between items-start p-3">
        <span className="text-sm text-green-600 md:text-xl">{category}</span>

        <h3 className="font-bold lg:text-xl">{title}</h3>

        <p className="text-gray-600 lg:font-bold line-clamp-2">{description}</p>

        <time className="text-gray-600">{date}</time>
      </div>
    </article>
  );
}

export default NewsCard;
