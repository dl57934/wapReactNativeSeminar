import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather
} from "@expo/vector-icons";
import React from "react";

export const backgroudColorArrays = [
  ["#11998e", "#38ef7d"],
  ["rgb(254, 149, 10)", "rgb(253, 255, 10)"],
  ["rgb(185, 106, 39)", "rgb(255, 236, 59)"],
  ["#ED213A", "#93291E"],
  ["rgb(160, 47, 217)", "rgb(237, 98, 17)"],
  ["rgb(134, 50, 53)", "#fff"]
];

export const LevelImo = [
  <MaterialCommunityIcons name="tree" size={130} color="white" />,
  <Feather name="cloud" size={130} color="white" />,
  <AntDesign name="meh" size={130} color="white" />,
  <AntDesign name="frowno" size={130} color="white" />,
  <AntDesign name="smileo" size={130} color="white" />,
  <MaterialCommunityIcons name="emoticon-devil" size={130} color="white" />
];

export const Description = [
  { statusText: "좋음", explanation: "탁한 공기, 마스크 챙기세요!!!!" },
  { statusText: "보통", explanation: "지금은 외출하셔도 좋습니다." },
  { statusText: "나쁨", explanation: "탁한 공기, 마스크 챙기세요!!!!" },
  { statusText: "상당히 나쁨", explanation: "탁한 공기, 마스크 챙기세요!!!!" },
  { statusText: "매우 나쁨", explanation: "탁한 공기, 마스크 챙기세요!!!!" },
  { statusText: "상당히 나쁨", explanation: "탁한 공기, 마스크 챙기세요!!!!" }
];
