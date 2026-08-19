import Image from "next/image";

function MatchCard() {
  return (
    <div>
      <h2 className="text-center my-5 text-xl">لالیگا</h2>
      <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-10 my-4">
        <div className="flex gap-1 justify-center items-center">
          <figure className="size-10 lg:size-16 relative">
            <Image className="object-contain" src={"/logo/realMadrid.png"} alt="realMadrid" fill />
          </figure>

          <h3 className="text-base md:text-lg lg:text-xl text-white">رئال مادرید</h3>
        </div>

        <span className="font-bold">vs</span>

        <div className="flex gap-1 justify-center items-center">
          <h3 className="text-base md:text-lg lg:text-xl text-white">بارسلونا</h3>
          <figure className="size-10 lg:size-16 relative">
            <Image className="object-contain" src={"/logo/barcelona.png"} alt="barcelona" fill />
          </figure>
        </div>
      </div>
      <h2 className="text-center mb-5 text-xl">22:30</h2>
    </div>
  );
}

export default MatchCard;
