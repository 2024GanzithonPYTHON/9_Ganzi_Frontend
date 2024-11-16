import React, { useState, useEffect } from 'react';
import * as CD from './styledChildDetail';

export function ChildDetail() {
  const [nickname, setNickname] = useState('');
  const [Institution, setInstitution] = useState('');

  const [selectedDays, setSelectedDays] = useState([]); // 요일 선택
  const [allDaysSelected, setAllDaysSelected] = useState(false); // 매일 선택

  // 등하원 기관 선택
  const handleInstitution = (institution) => {
    setInstitution(institution); // 선택된 기관 상태 업데이트
  };

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
    <CD.Container>
      {/* 프로필: 추후 닉네임 변수화 필요 */}
      <CD.ProfileImg>
        <img src="/images/ProfileImg.svg" alt="프로필 이미지" />
      </CD.ProfileImg>
      <CD.Nickname>홍길동</CD.Nickname>
      <CD.InfoText>
        <CD.HighlightText>자녀</CD.HighlightText>
        <span>에 대해 알려주세요.</span>
      </CD.InfoText>

      {/* 아이 별명 입력 */}
      <CD.LabelContainer top="350px">
        {/* 아이콘 */}
        <CD.ChildIcon />
        <CD.Label>아이의 별명으로 사용할 이름을 입력하세요.</CD.Label>
      </CD.LabelContainer>
      {/* 별명 입력란 */}
      <CD.InputContainer>
        <CD.Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="별명을 입력하세요"
        />
      </CD.InputContainer>

      {/* 등하원 기관 선택 */}
      <CD.LabelContainer top="436px">
        {/* 아이콘 */}
        <CD.InstitutionIcon />
        <CD.Label>등하원/교 기관</CD.Label>
      </CD.LabelContainer>
      <CD.ChoiceContainer>
        {['어린이집', '유치원', '초등학교', '중학교', '그 외'].map(
          (institution) => (
            <CD.ChoiceButton
              key={institution}
              selected={Institution === institution}
              onClick={() => handleInstitution(institution)}
            >
              {institution}
            </CD.ChoiceButton>
          )
        )}
      </CD.ChoiceContainer>

      {/* 등하원 일자 선택 */}
      <CD.LabelContainer top="579px">
        {/* 아이콘 */}
        <CD.ScheduleIcon />
        <CD.Label>출근 일자</CD.Label>
      </CD.LabelContainer>
      <CD.DayContainer>
        {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
          <CD.Day
            key={day}
            selected={selectedDays.includes(day)}
            onClick={() => toggleDaySelection(day)}
          >
            {day}
          </CD.Day>
        ))}
      </CD.DayContainer>

      {/* 매일 선택 */}
      <CD.SelectAllContainer onClick={selectAllDays}>
        <CD.SelectAllIcon isSelected={allDaysSelected} />
        <CD.SelectAllText>매일 선택</CD.SelectAllText>
      </CD.SelectAllContainer>

      {/* 등하원 시간 입력 */}

      {/* 반려동물 종 선택 */}

      {/* 반려동물 별명 입력 */}
    </CD.Container>
  );
}
export default ChildDetail;
