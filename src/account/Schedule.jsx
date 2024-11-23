import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styledSchedule";

const Schedule = () => {
  const [schedule, setSchedule] = useState(""); // 일정 이름
  const [duration, setDuration] = useState(""); // 일정 지속 시간
  const [startTime, setStartTime] = useState({ hour: "00", minute: "00" }); // 시작 시간
  const [currentWeek, setCurrentWeek] = useState([]); // 현재 주 정보
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/main`);
  };

  const goBack = () => {
    navigate(-1);
  };

  // 현재 주의 날짜 계산
  useEffect(() => {
    const today = new Date();
    const dayIndex = today.getDay();
    const startOfWeek = new Date(today);
    const adjustedDayIndex = dayIndex === 0 ? 7 : dayIndex; // 일요일 처리

    startOfWeek.setDate(today.getDate() - adjustedDayIndex + 1);

    const week = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return {
        day: ["월", "화", "수", "목", "금", "토", "일"][i],
        date: date.getDate(),
      };
    });

    setCurrentWeek(week);
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

  // 일정 전송 함수
  const handleSubmit = async () => {
    const token = localStorage.getItem("Authorization"); // 토큰 가져오기

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/register");
      return;
    }

    // 현재 날짜와 사용자가 입력한 시간을 조합해 startTime 생성
    const today = new Date();
    const formattedStartTime = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      parseInt(startTime.hour),
      parseInt(startTime.minute)
    ).toISOString();

    try {
      const response = await fetch(
        "https://ganzithon.hyunwoo9930.store/schedule",
        {
          method: "POST",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: schedule, // 일정 이름
            duration: parseInt(duration), // 일정 지속 시간
            startTime: formattedStartTime, // ISO 형식의 시작 시간
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to save schedule: ${response.status}`);
      }

      alert("일정이 저장되었습니다!");
      goMain(); // 메인 페이지로 이동
    } catch (error) {
      console.error("Error saving schedule:", error.message);
      alert("일정을 저장하는 데 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <S.Container>
      <S.BackBtn onClick={goBack} />
      <S.DateTitle>{getFormattedDate()}</S.DateTitle>
      <S.WeekWrapper>
        {currentWeek.map((item, index) => {
          const today = new Date();
          const isToday =
            today.getDate() === item.date && today.getDay() - 1 === index;

          return (
            <S.Day key={index} isToday={isToday}>
              <span>{item.day}</span>
              <span>{item.date}</span>
            </S.Day>
          );
        })}
      </S.WeekWrapper>
      <S.Label>추가할 일정</S.Label>
      <S.LightGrayBox />
      <S.Input
        type="text"
        placeholder="일정에 대해 적어주세요"
        value={schedule}
        onChange={(e) => setSchedule(e.target.value)}
      />
      <S.Label style={{ marginTop: "20px" }}>일정 시간</S.Label>
      <S.DurationWrapper>
        {["1", "2", "3", "24"].map((item, index) => (
          <S.DurationButton
            key={index}
            active={duration === item}
            onClick={() => handleDurationClick(item)}
          >
            {item === "24" ? "온종일" : `${item}시간`}
          </S.DurationButton>
        ))}
      </S.DurationWrapper>
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
      <S.CompleteBtn
        onClick={async () => {
          await handleSubmit(); // handleSubmit 완료 대기
          goMain(); // main 페이지로 이동
        }}
      />
    </S.Container>
  );
};

export default Schedule;
