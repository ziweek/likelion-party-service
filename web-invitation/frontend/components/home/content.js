import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Content() {
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
            <div data-aos="fade-in" data-aos-duration="1500" className="py-5">
              <p className="text-l lg:w-1/2 w-full leading-relaxed">
                &nbsp;&nbsp;인류의 사는가 청춘은 장식하는 얼음에 영락과 많이
                그들은 작고 끓는다. 하였으며, 얼음이 있음으로써 봄바람을 이는
                바로 웅대한 열락의 보라. 속잎나고, 목숨을 그들에게 살 피어나기
                무엇이 투명하되 그리하였는가? 우리는 든 속에서 인생을 할지니,
                약동하다. 실로 피가 하는 지혜는 사랑의 같으며, 이것이다. 얼마나
                청춘을 보이는 할지니, 것이다.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div data-aos="fade-in" className="p-4">
              <div className="bg-slate-800 p-6 rounded-lg">
                <div>{/* <AnimationEarth /> */}</div>
                <br />
                <h2 className="text-2xl font-medium title-font mb-4">
                  시크릿 산타의 경품 추첨
                </h2>
                <h3 className="tracking-widest text-[#FF770F] text-lg font-medium title-font">
                  커다란 예가 창공에
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;인간의 찾아 이상을 든 목숨을 듣는다. 우리 피가
                    별과 말이다. 피고 봄바람을 인생의 얼음에 풀밭에 사라지지
                    아니다. 행복스럽고 유소년에게서 때에, 얼마나 있으랴? 곧 없는
                    위하여 부패를 얼음이 대중을 열락의 있는 쓸쓸한 부패뿐이다.
                  </p>
                </div>
                <br />
                <h3 className="tracking-widest text-[#FF770F] text-lg font-medium title-font">
                  EVENT
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    행복스럽고 품고 그들의 이 예수는 대중을 예가 청춘의 듣는다.
                    설레는 구할 두손을 예수는 그와 우리의 것이다. 가치를 뭇
                    타오르고 튼튼하며, 일월과 광야에서 밝은 그들은 별과 운다.
                    방지하는 어디 자신과 않는 아름다우냐? 때까지 원대하고,
                    천자만홍이 이상은 인생에 이것이다.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="p-4">
              <div className="bg-slate-800 p-6 rounded-lg">
                <div>{/* <AnimationEarth /> */}</div>
                <br />
                <h2 className="text-2xl font-medium title-font mb-4">
                  인생네컷! 멋사네컷!
                </h2>
                <h3 className="tracking-widest text-[#FF770F] text-lg font-medium title-font">
                  커다란 예가 창공에
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;인간의 찾아 이상을 든 목숨을 듣는다. 우리 피가
                    별과 말이다. 피고 봄바람을 인생의 얼음에 풀밭에 사라지지
                    아니다. 행복스럽고 유소년에게서 때에, 얼마나 있으랴? 곧 없는
                    위하여 부패를 얼음이 대중을 열락의 있는 쓸쓸한 부패뿐이다.
                  </p>
                </div>
                <br />
                <h3 className="tracking-widest text-[#FF770F] text-lg font-medium title-font">
                  EVENT
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    행복스럽고 품고 그들의 이 예수는 대중을 예가 청춘의 듣는다.
                    설레는 구할 두손을 예수는 그와 우리의 것이다. 가치를 뭇
                    타오르고 튼튼하며, 일월과 광야에서 밝은 그들은 별과 운다.
                    방지하는 어디 자신과 않는 아름다우냐? 때까지 원대하고,
                    천자만홍이 이상은 인생에 이것이다.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="p-4">
              <div className="bg-slate-800 p-6 rounded-lg">
                <div>{/* <AnimationEarth /> */}</div>
                <br />
                <h2 className="text-2xl font-medium title-font mb-4">
                  경품 추첨
                </h2>
                <h3 className="tracking-widest text-[#FF770F] text-lg font-medium title-font">
                  커다란 예가 창공에
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;인간의 찾아 이상을 든 목숨을 듣는다. 우리 피가
                    별과 말이다. 피고 봄바람을 인생의 얼음에 풀밭에 사라지지
                    아니다. 행복스럽고 유소년에게서 때에, 얼마나 있으랴? 곧 없는
                    위하여 부패를 얼음이 대중을 열락의 있는 쓸쓸한 부패뿐이다.
                  </p>
                </div>
                <br />
                <h3 className="tracking-widest text-[#FF770F] text-lg font-medium title-font">
                  EVENT
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    행복스럽고 품고 그들의 이 예수는 대중을 예가 청춘의 듣는다.
                    설레는 구할 두손을 예수는 그와 우리의 것이다. 가치를 뭇
                    타오르고 튼튼하며, 일월과 광야에서 밝은 그들은 별과 운다.
                    방지하는 어디 자신과 않는 아름다우냐? 때까지 원대하고,
                    천자만홍이 이상은 인생에 이것이다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
