// Contribution.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"; // styled-components 사용
import * as C from "./styledContribution";

const Contribution = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const timelineData = [
    {
      day: "월",
      date: "11",
      morningTask: "오전 집안일 모두 완료!",
      eveningTask: "오후 집안일 2개 남음",
      percentage: 91,
    },
    {
      day: "일",
      date: "10",
      morningTask: "오전 집안일 1개 남음",
      eveningTask: "오후 집안일 2개 남음",
      percentage: 80,
    },
    {
      day: "토",
      date: "10",
      morningTask: "오전 집안일 3개 남음",
      eveningTask: "오후 집안일 4개 남음",
      percentage: 45,
    },
  ];

  const compareData = [
    { name: "홍길동", percentage: 93, contri_per: 93 },
    { name: "OOO", percentage: 80, contri_per: 80 },
  ];

  return (
    <C.Container>
      <C.LightGrayBox />
      <C.BackBtn onClick={goBack} />
      <C.DateTitle>TODAY 2024년 11월 11일</C.DateTitle>
      <C.SectionTitle>최근 우리의 집안일 기여도</C.SectionTitle>
      <C.InfoIcon />
      <C.InfoText>3일간의 집안일 히스토리를 볼 수 있어요.</C.InfoText>
      <C.GraphIcon /> <C.MiniGraphIcon />
      <C.HighlightBox>00씨 보다 기여도가 36% 더 높아요</C.HighlightBox>{" "}
      <C.TimelineContainer>
        {timelineData.map((data, index) => (
          <C.TimelineItem key={index}>
            <C.DateIcon isActive={index === 0} />
            <C.StyledSpan isActive={index === 0}>{data.day}</C.StyledSpan>
            <C.StyledSpan2 isActive={index === 0}>{data.date}</C.StyledSpan2>
            <C.ContriBox>
              <div>
                <C.SunIcon />
                <p>{data.morningTask}</p>
                <C.MoonIcon />
                <p>{data.eveningTask}</p>
              </div>
              <HalfCircleGraph percentage={data.percentage} />
            </C.ContriBox>
            {index < timelineData.length - 1 && <C.GrayLine />}
          </C.TimelineItem>
        ))}
      </C.TimelineContainer>
      <C.SectionTitle style={{ top: "57%", fontWeight: "600", left: "18%" }}>
        기여도 비교
      </C.SectionTitle>
      <C.InfoIcon style={{ top: "60%" }} />
      <C.InfoText style={{ top: "59.9%", left: "41%" }}>
        한달간의 집안일 기여도를 비교해 볼 수 있어요.
      </C.InfoText>
      <C.ContriProfile>
        <img src="/images/ContriProfile.svg" />
      </C.ContriProfile>
      <C.NickName>홍길동</C.NickName>
      {/* 나 */}
      <C.WhiteBox>
        <CircularGraph contri_per={compareData[0].contri_per} />
      </C.WhiteBox>
      {/* 상대 */}
      <C.WhiteBox style={{ left: "71%" }}>
        <CircularGraph contri_per={compareData[1].contri_per} />
      </C.WhiteBox>
      <C.ContriProfile style={{ left: "58%" }}>
        <img src="/images/ContriProfile.svg" />
      </C.ContriProfile>
      <C.NickName style={{ left: "72%" }}>00</C.NickName>
      <C.HighlightText>
        00씨, 기여도를 높이기 위해 집안일에 더욱 신경써주세요!
      </C.HighlightText>
    </C.Container>
  );
};

const HalfCircleGraph = ({ percentage }) => {
  const radius = 50; // 반지름
  const circumference = Math.PI * radius; // 반원의 둘레
  const filledLength = (percentage / 100) * circumference; // 채워진 부분의 길이
  const offset = circumference - filledLength; // 남은 부분의 길이

  return (
    <C.GraphContainer>
      <svg width="100" height="60" viewBox="0 0 120 60">
        {/* 회색 배경 반원 */}
        <path
          d="M10 50 A40 40 0 1 1 110 50"
          fill="none"
          stroke="#E5E5E5"
          strokeWidth="10"
        />
        {/* 퍼센트 반원 */}
        <path
          d="M10 50 A40 40 0 1 1 110 50"
          fill="none"
          stroke="#8F34FF"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.5s ease-in-out",
          }}
        />
      </svg>
      {/* 퍼센트 텍스트 */}
      <C.PercentageText>{percentage}%</C.PercentageText>
    </C.GraphContainer>
  );
};

const CircularGraph = ({ contri_per }) => {
  const radius = 40; // 반지름
  const strokeWidth = 15; // 선 두께
  const circumference = 2 * Math.PI * radius; // 원의 둘레
  const offset = circumference - (contri_per / 100) * circumference; // 채워진 비율

  return (
    <C.GraphWrapper>
      <svg width="100" height="100">
        {/* 연보라색 배경 원 */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#E5D4FF" // 연보라색
          strokeWidth={strokeWidth}
        />
        {/* 보라색 진행 원 */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#8F34FF" // 보라색
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transform: "rotate(-90deg)", // 시작점을 위쪽에서 왼쪽으로 이동
            transformOrigin: "50% 50%",
            transition: "stroke-dashoffset 0.5s ease-in-out", // 애니메이션 효과
          }}
        />
      </svg>
      {/* 중앙 텍스트 */}
      <C.PercentageText>{contri_per}%</C.PercentageText>
    </C.GraphWrapper>
  );
};

export default Contribution;
