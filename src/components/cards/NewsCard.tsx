import Image from "next/image";

function NewsCard() {
  return (
    <article className=" flex flex-col bg-white w-full h-72 shadow-[0px_12px_45px_rgba(255,255,255,0.45)]">
      <figure className="relative w-full h-1/2">
        <Image
          className="object-cover"
          src={"/newsImage.jpg"}
          alt="newsImage"
          fill
        />
      </figure>
      <div className="flex flex-1 flex-col justify-between items-start p-3">
        <span className="text-xl text-green-600 md:text-2xl lg:text-3xl">
          دسته بندی
        </span>

        <h4 className="font-bold lg:text-xl "> عنوان خبر</h4>

        <p className="text-gray-600 lg:font-bold">متن خبر</p>

        <time className="text-gray-600">تاریخ</time>
      </div>
    </article>
  );
}

export default NewsCard;
