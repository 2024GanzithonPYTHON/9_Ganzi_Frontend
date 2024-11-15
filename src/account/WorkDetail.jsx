import Reac, { useState, useEffect } from 'react';
import * as WD from './styledWorkDetail';

export function WorkDetail() {
  const [isScheduleFixed, setIsScheduleFixed] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);
  const [allDaysSelected, setAllDaysSelected] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  // 스낵바
  useEffect(() => {
    if (showSnackbar) {
      const timer = setTimeout(() => setShowSnackbar(false), 4000); // 4초동안 스낵바 나타남
      return () => clearTimeout(timer);
    }
  }, [showSnackbar]);

  // 출퇴근 일정 선택
  const toggleSchedule = (isFixed) => setIsScheduleFixed(isFixed);

  // 요일 선택
  const toggleDaySelection = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // 모든 요일 선택
  const selectAllDays = () => {
    setAllDaysSelected(!allDaysSelected);
    setSelectedDays(
      allDaysSelected ? [] : ['월', '화', '수', '목', '금', '토', '일']
    );
  };

  return (
    <WD.Container>
      {/* 프로필: 추후 닉네임 변수화 필요 */}
      <WD.ProfileImg>
        <img src="/images/ProfileImg.svg" alt="프로필 이미지" />
      </WD.ProfileImg>
      <WD.Nickname>홍길동</WD.Nickname>
      <WD.InfoText>
        <span>홍길동씨의 </span>
        <WD.HighlightText>직장</WD.HighlightText>
        <span>에 대해 알려주세요.</span>
      </WD.InfoText>

      {/* 출퇴근 일정 선택 */}
      <WD.ButtonContainer>
        <WD.ScheduleButton
          selected={isScheduleFixed === true}
          onClick={() => toggleSchedule(true)}
        >
          출퇴근 일이 일정해요
        </WD.ScheduleButton>
        <WD.ScheduleButton
          selected={isScheduleFixed === false}
          onClick={() => toggleSchedule(false)}
        >
          일정하지 않아요
        </WD.ScheduleButton>
      </WD.ButtonContainer>

      {/* 출근 요일 선택 */}
      <WD.LabelContainer>
        {/* 아이콘 */}
        <WD.ScheduleIcon />
        <WD.Label>출근 일자</WD.Label>
      </WD.LabelContainer>
      <WD.DayContainer>
        {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
          <WD.Day
            key={day}
            selected={selectedDays.includes(day)}
            onClick={() => toggleDaySelection(day)}
          >
            {day}
          </WD.Day>
        ))}
      </WD.DayContainer>

      {/* 매일 선택 */}
      <WD.SelectAllContainer onClick={selectAllDays}>
        <WD.SelectAllIcon isSelected={allDaysSelected} />
        <WD.SelectAllText>매일 선택</WD.SelectAllText>
      </WD.SelectAllContainer>
    </WD.Container>
  );
}

export default WorkDetail;
