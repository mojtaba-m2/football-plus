import Image from "next/image";
import Container from "../Container";

function HeroSection() {
  return (
    <div className="relative h-125 md:h-150 lg:h-175">
      <figure>
        <Image
          className="object-cover object-top "
          src={"/heroImage.jpg"}
          alt="hero"
          fill
        />
      </figure>

      <div className="absolute z-10 inset-0 bg-black/30"></div>
      <Container>
        <div className="absolute z-20 lg:p-10">
          <h1 className="text-white mt-1 mx-6 flex items-center before:content-[''] before:w-2 before:h-2 before:bg-green-500/50 before:rounded-full before:ml-2  lg:text-5xl">
            به دنیای هیجان انگیز
            <span className="mx-1 text-green-500 font-bold px-1">
              فوتبال پلاس
            </span>
            خوش آمدید
          </h1>

          <div className=" m-6 text-white text-lg md:text-2xl md:mt-5 md:mx-6 lg:text-3xl lg:mt-28">
            <h2 className="text-xl mb-2">شروع کنید</h2>

            <ul className="list-disc list-inside">
              <li>اخرین اخبار و تحلیل ها</li>
              <li>بازی های امروز</li>
              <li>پیش بینی</li>
              <li>گل های برتر ماه</li>
            </ul>
          </div>
        </div>

        <div className="w-24 h-36 z-20 top-20 md:w-36 md:h-52 md:left-20 md:top-40 xl:w-52 xl:h-80 xl:left-56 rounded-full absolute  xl:top-60 left-10 bg-center bg-cover shadow-[0px_12px_45px_rgba(255,255,255,0.45)]">
          <figure>
            <Image
              className="absolute object-cover object-center rounded-full"
              src={"/bal.jpg"}
              alt="bal"
              fill
            />
          </figure>
          <div className="hidden absolute rounded-full md:block md:w-30 md:h-30 -top-8 -right-10">
            <Image
              className="object-cover rounded-full"
              src={"/hero2.jpg"}
              alt="hero2"
              fill
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
