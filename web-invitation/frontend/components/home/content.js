import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Content() {
  return (
    <>
      <section className="h-full flex flex-col items-center justify-center">
        <div className="bg-primary container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-10">
            <div className="lg:w-1/2 w-full lg:mb-0">
              <h1 className="text-white sm:text-xl text-3xl font-medium title-font mb-2">
                이벤트 소개
              </h1>
              <div className="h-1 w-full bg-[#FF770F] rounded"></div>
            </div>
            <div className="py-5">
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
            <div className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-slate-800 p-6 rounded-lg">
                <div>{/* <AnimationEarth /> */}</div>
                <br />
                <h2 className="text-2xl font-medium title-font mb-4">
                  경품 추첨
                </h2>
                <h3 className="tracking-widest text-[#FF770F] text-lg font-medium title-font">
                  커다란 예가 창공에
                </h3>
                <div>
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
                <div>
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
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  {/* <AnimationMoon /> */}
                </div>
                <br />
                <h2 className="text-2xl font-medium title-font mb-4">
                  블링블링 달빛별
                </h2>
                <h3 className="tracking-widest text-indigo-400 text-lg font-medium title-font">
                  포토존 부스
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;호이를 무사히 찾아주셨군요! 오늘 파이빌 은하계를
                    돌며 호이를 찾아주신 여러분들을 위해 기념 촬영을
                    준비했습니다. 메타버스 세계에 접속했던 오늘의 추억을
                    사진으로 남겨보세요!
                  </p>
                </div>
                <br />
                <h3 className="tracking-widest text-indigo-400 text-lg font-medium title-font">
                  EVENT
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    - 오늘 체험에서 즐거웠던 활동 or 재밌었던 장면을 인스타그램
                    스토리에 @ku_3ds를 태그해서 올려주시면 폴라로이드 사진을
                    촬영해드립니다!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  {/* <AnimationMar /> */}
                </div>
                <br />
                <h2 className="text-2xl font-medium title-font mb-4">
                  콩닥콩닥 화성별
                </h2>
                <h3 className="tracking-widest text-indigo-400 text-lg font-medium title-font">
                  공포게임 체험부스 - Dont let go
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;다음으로 도착한 행성은 화성입니다. 화성은
                    어두컴컴하고 금방이라도 뭔가 튀어나올 것만 같아요. 어라?
                    구구가 저 멀리서 무언가를 발견한 것 같습니다! 저쪽으로
                    가려면 이 길을 지나야 하는데, 과연 무사히 구구에게 다가갈 수
                    있을까요?
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  {/* <AnimationSaturn /> */}
                </div>
                <br />
                <h2 className="text-2xl font-medium title-font mb-4">
                  빵야빵야 토성별
                </h2>
                <h3 className="tracking-widest text-indigo-400 text-lg font-medium title-font">
                  액션게임 체험부스 - Pistol Whip
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;이제 여러분은 토성에 도착했습니다. 앗! 저기
                    호이가 있는 것 같아요. 그런데 누군가에게 쫓기고 있는 것
                    같습니다. 우리가 가서 도와줘야겠어요. 어서 이 총을 받아
                    적들을 물리쳐주세요! 배경 음악에 맞춰 쏘면 더 높은 점수를
                    받을 수 있답니다.
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <div data-aos="zoom-in-up" data-aos-duration="800">
                  {/* <AnimationNeptune /> */}
                </div>
                <br />
                <h2 className="text-2xl font-medium title-font mb-4">
                  삐용삐용 천왕성
                </h2>
                <h3 className="tracking-widest text-indigo-400 text-lg font-medium title-font">
                  리듬게임 체험부스 - 비트세이버
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;천왕성에 착륙한 여러분은 난관에 부딪힙니다.
                    리듬과 함께 쏟아지는 별 때문에 착륙한 자리에서 움직일 수가
                    없습니다. 리듬에 맞춰 재빨리 광선검으로 별을 갈라서 안전한
                    곳으로 이동해주세요! 무사히 이동하신 분들을 위한 상품도
                    준비되어 있어요!
                  </p>
                </div>
                <br />
                <h3 className="tracking-widest text-indigo-400 text-lg font-medium title-font">
                  EVENT
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    - 1층 & 2층의 비트세이버 부스에서 점수 챌린지에 도전하시면
                    점수 상위 8분에게 상품을 드립니다!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-medium title-font mb-4">
                  토닥토닥 해왕성
                </h2>
                <h3 className="tracking-widest text-indigo-400 text-lg font-medium title-font">
                  휴식 및 셀프존 - 구글 카드보드
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;휴~ 무사히 여기까지 지나왔어요. 다음으로
                    이동하기 전에 저기 해왕성에서 잠시 쉬었다 가는 게 좋을 것
                    같아요. 지구에서 미리 받은 구글 카드보드를 사용하여 다양한
                    VR 체험 영상을 손쉽게 즐겨보세요!
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="fade-in" className="xl:w-1/5 md:w-1/2 p-4">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-medium title-font mb-4">
                  우주정거장
                </h2>
                <h3 className="tracking-widest text-indigo-400 text-lg font-medium title-font">
                  안내 및 퀴즈 체험부스
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    &nbsp;&nbsp;이제 지구로 돌아갈 시간입니다. 지구로 가기 전
                    우주정거장에 들러 연료를 충전해야 합니다. 퀴즈를 풀면
                    우주정거장으로 들어갈 수 있어요. 우주정거장에서 연료를
                    충전한 후 호이를 다시 지구로 데려다 주세요!
                  </p>
                </div>
                <br />
                <h3 className="tracking-widest text-indigo-400 text-lg font-medium title-font">
                  EVENT
                </h3>
                <div
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <br />
                  <p className="leading-relaxed text-base">
                    - 퀴즈 부스에서 게임을 진행하신 분들에게만 ‘구구 3DS 입체
                    뱃지’를 드립니다!
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
