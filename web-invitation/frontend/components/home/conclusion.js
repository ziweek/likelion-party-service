import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Conclusion() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="h-full flex flex-col items-center justify-center">
        <div className="bg-primary container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div data-aos="fade-in" className="lg:w-1/2 w-full lg:mb-0">
              <h1 className="text-white sm:text-xl text-3xl font-medium title-font mb-2">
                이벤트 소개
              </h1>
              <div
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                className="h-1 w-full bg-[#FF770F] rounded"
              ></div>
            </div>
          </div>
          <div className="min-h-screen">
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
          </div>
        </div>
      </section>
    </>
  );
}
