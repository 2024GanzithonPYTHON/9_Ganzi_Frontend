// Contribution.jsx
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as C from "./styledContribution";

const Contribution = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const timelineData = [
    {
      date: "월 11",
      morningTask: "오전 집안일 모두 완료!",
      eveningTask: "오후 집안일 2개 남음",
      percentage: 91,
    },
    {
      date: "일 10",
      morningTask: "오전 집안일 1개 남음",
      eveningTask: "오후 집안일 2개 남음",
      percentage: 80,
    },
    {
      date: "토 09",
      morningTask: "오전 집안일 3개 남음",
      eveningTask: "오후 집안일 4개 남음",
      percentage: 45,
    },
    {
      date: "토 09",
      morningTask: "오전 집안일 3개 남음",
      eveningTask: "오후 집안일 4개 남음",
      percentage: 45,
    },
  ];

  const compareData = [
    { name: "홍길동", percentage: 93 },
    { name: "OOO", percentage: 80 },
  ];

  return (
    <C.Container>
      <C.BackBtn onClick={goBack} />
      <C.DateTitle>TODAY 2024년 11월 11일</C.DateTitle>
      <C.SectionTitle>최근 우리의 집안일 기여도</C.SectionTitle>
      <C.InfoIcon />
      <C.InfoText>3일간의 집안일 히스토리를 볼 수 있어요.</C.InfoText>
      <C.GraphIcon /> <C.MiniGraphIcon />
      <C.HighlightBox>00씨 보다 기여도가 36% 더 높아요</C.HighlightBox>
      <C.TimelineContainer>
        {timelineData.map((data, index) => (
          <React.Fragment key={index}>
            <C.DateIcon />
            <C.ContriBox>
              <div>
                <C.SunIcon />
                <p>{data.morningTask}</p>
                <C.MoonIcon />
                <p>{data.eveningTask}</p>
              </div>
            </C.ContriBox>
            {/* 마지막 요소 뒤에는 선을 추가하지 않음 */}
            {index < timelineData.length - 1 && <C.GrayLine />}
          </React.Fragment>
        ))}
      </C.TimelineContainer>
    </C.Container>
  );
};

export default Contribution;
