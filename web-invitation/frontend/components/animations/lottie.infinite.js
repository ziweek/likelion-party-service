import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/lotties/infinite.json";

export default function LottieInfinite() {
  return (
    <Lottie
      loop={0}
      animationData={lottieJson}
      play
      // style={{ width: 150, height: 150 }}
    />
  );
}
