import CarouselWithPopup from "@/components/CarouselWithPopup";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <div className=" pt-10 font-paytone-custom font-extrabold text-center text-blue-900 w-full">
          <div className=" text-6xl lg:text-8xl">PREVIOUS</div>
          <div className=" text-7xl lg:text-9xl">CALENDAR</div>
      </div>
      <CarouselWithPopup/>
      <div className="font-paytone-custom font-extrabold text-center text-blue-900 w-full">
          <div className=" text-6xl lg:text-9xl">WHAT’S NEXT?</div>
      </div>
    </div>
  );
}
