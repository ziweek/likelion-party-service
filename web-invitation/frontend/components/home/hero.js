import Image from "next/image";
// import ImgTiger from "../../public/hoi.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LottieInfinite from "../animations/lottie.infinite";

export default function Hero() {
  return (
    <>
      <section className="text-gray-500 body-font">
        <div className="bg-primary container mx-auto flex px-5  items-center justify-center flex-col">
          <div data-aos="fade-up" className="">
            <LottieInfinite />
          </div>
          <br />
          <div data-aos="fade-in">
            <h1 className="font-pak title-font sm:text-4xl text-3xl mb-4 font-medium">
              이 호랑이를 찾습니다!
            </h1>
          </div>
          <div className="text-center lg:w-2/3 w-full">
            <div data-aos="fade-in" data-aos-duration="1500">
              <p className="font-hsb mb-8 leading-relaxed">
                KU-3DS에 놀러온 호이,
                <br />
                VR 체험을 하던 중 갑자기 사라져버렸다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
