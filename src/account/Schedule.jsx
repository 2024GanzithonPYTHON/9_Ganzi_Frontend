import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styledSchedule";

const Schedule = () => {
  const [schedule, setSchedule] = useState("");
  const [duration, setDuration] = useState("");
  const [startTime, setStartTime] = useState({ hour: "00", minute: "00" });
  const [currentWeek, setCurrentWeek] = useState([]);
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };

  const goBack = () => {
    navigate(-1);
  };

  // 현재 주의 날짜 계산
  useEffect(() => {
    const today = new Date(); // 오늘 날짜
    const dayIndex = today.getDay(); // 요일 인덱스 (0: 일요일, 1: 월요일, ...)
    const startOfWeek = new Date(today); // 주 시작일 설정

    // 요일 인덱스를 월요일 시작 기준으로 변경 (일요일은 7로 설정)
    const adjustedDayIndex = dayIndex === 0 ? 7 : dayIndex;

    // 이번 주 월요일 날짜 계산
    startOfWeek.setDate(today.getDate() - adjustedDayIndex + 1);

    const week = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return {
        day: ["월", "화", "수", "목", "금", "토", "일"][i],
        date: date.getDate(), // 날짜 값만 저장
      };
    });

    setCurrentWeek(week); // 주 데이터 저장
  }, []);

  // 날짜 형식을 "TODAY YYYY년 MM월 DD일"로 변환
  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `TODAY ${year}년 ${month}월 ${day}일`;
  };

  // 일정 시간 선택
  const handleDurationClick = (value) => {
    setDuration(value);
  };

  // 시간 변경
  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setStartTime((prev) => ({ ...prev, [name]: value }));
  };

  // 일정 추가 버튼
  const handleSubmit = () => {
    console.log("일정:", schedule);
    console.log("시간:", duration);
    console.log("시작 시간:", `${startTime.hour}:${startTime.minute}`);
    alert("일정이 저장되었습니다!");
  };

  return (
    <S.Container>
      {/* 상단 헤더 */}
      <S.BackBtn onClick={goBack} /> {/* 요청한 BackBtn 스타일로 변경 */}
      <S.DateTitle>{getFormattedDate()}</S.DateTitle>
      {/* 요일과 날짜 */}
      <S.WeekWrapper>
        {currentWeek.map((item, index) => {
          const today = new Date();
          const isToday =
            today.getDate() === item.date && today.getDay() - 1 === index;

          return (
            <S.Day key={index} isToday={isToday}>
              <span>{item.day}</span> {/* 요일 */}
              <span>{item.date}</span> {/* 날짜 */}
            </S.Day>
          );
        })}
      </S.WeekWrapper>
      {/* 일정 입력 */}
      <S.Label>추가할 일정</S.Label>
      <S.LightGrayBox />
      <S.Input
        type="text"
        placeholder="일정에 대해 적어주세요"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
      {/* 일정 시간 */}
      <S.Label style={{ marginTop: "20px" }}>일정 시간</S.Label>
      <S.DurationWrapper>
        {["1시간", "2시간", "3시간", "온종일"].map((item, index) => (
          <S.DurationButton
            key={index}
            active={duration === item}
            onClick={() => handleDurationClick(item)}
          >
            {item}
          </S.DurationButton>
        ))}
      </S.DurationWrapper>
      {/* 일정 시작 시간 */}
      <S.Label style={{ marginTop: "70px" }}>일정 시작 시각</S.Label>
      <S.TimeWrapper>
        <S.TimeInput
          name="hour"
          value={startTime.hour}
          onChange={handleTimeChange}
        >
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={String(i).padStart(2, "0")}>
              {String(i).padStart(2, "0")}
            </option>
          ))}
        </S.TimeInput>
        :
        <S.TimeInput
          name="minute"
          value={startTime.minute}
          onChange={handleTimeChange}
        >
          {Array.from({ length: 60 }, (_, i) => (
            <option key={i} value={String(i).padStart(2, "0")}>
              {String(i).padStart(2, "0")}
            </option>
          ))}
        </S.TimeInput>
      </S.TimeWrapper>
      {/* 완료 버튼 */}
      <S.CompleteBtn
        onClick={() => {
          goMain();
          handleSubmit();
        }}
      />
    </S.Container>
  );
};

export default Schedule;
