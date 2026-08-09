import Image from "next/image";
import Container from "../Container";

function LatestNews() {
  return (
    <div className="relative h-125 mt-20">
      <figure>
        <Image className="" src={"/newsBackground.jpg"} alt="newsImage" fill />
      </figure>

      <div className="absolute inset-0 bg-black/50"></div>
      <Container>
        <h1 className="text-xl text-white absolute md:text-2xl md:mt-5 md:mx-6 lg:text-3xl lg:mt-10 lg:p-10">
          آخرین اخبار
        </h1>
      </Container>
    </div>
  );
}

export default LatestNews;
