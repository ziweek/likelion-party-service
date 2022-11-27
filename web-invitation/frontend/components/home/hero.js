import AOS from "aos";
import "aos/dist/aos.css";
import LottieArrowDown from "../animations/lottie.arrow-down";

import LottieInfinite from "../animations/lottie.infinite";

export default function Hero() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div>
          <LottieInfinite></LottieInfinite>
        </div>
        <div>
          <h1 className="text-white sm:text-xl text-3xl font-medium title-font mb-2">
            NEXT x LIKELION
          </h1>
        </div>
        <div>
          <p className="text-white sm:text-m text-l font-medium title-font mb-2">
            Web Invitation
          </p>
        </div>
        <div className="py-10">
          <LottieArrowDown />
        </div>
      </section>
    </>
  );
}
