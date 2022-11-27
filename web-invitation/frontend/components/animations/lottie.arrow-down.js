import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from "../../public/lotties/arrow-down.json";

export default function LottieArrowDown() {
  return <Lottie loop animationData={lottieJson} play style={{ width: 75 }} />;
}
