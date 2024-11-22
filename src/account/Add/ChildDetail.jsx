import React, { useState, useEffect } from 'react';
import * as CD from './styledChildDetail';

export function ChildDetail() {
  const [childNickname, setChildNickname] = useState(''); // 아이 별명

  const [institution, setInstitution] = useState(''); //등하원 기관

  const [selectedDays, setSelectedDays] = useState([]); // 요일 선택
  const [allDaysSelected, setAllDaysSelected] = useState(false); // 매일 선택

  const [startWork, setStartWork] = useState(''); // 등원 시간
  const [endWork, setEndWork] = useState(''); // 하원 시간

  const [species, setSpecies] = useState(''); // 반려동물 종
  const [petNickname, setPetNickname] = useState(''); // 반려동물 별명

  // 등하원 기관 선택
  const handleInstitution = (newInstitution) => {
    setInstitution(newInstitution); // 선택된 기관 상태 업데이트
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

  // 시간 입력
  const handleTimeChange = (e, setTime) => {
    const input = e.target.value;
    if (/^[0-9:]*$/.test(input) && input.length <= 5) {
      if (input.length === 2 && !input.includes(':')) {
        setTime(input + ':'); // 2자리 입력 시 자동으로 ":" 추가
      } else {
        setTime(input);
      }
    }
  };

  // 반려동물 종 선택
  const handleSpecies = (newSpecies) => {
    setSpecies(newSpecies); // 선택된 종 상태 업데이트
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
      <CD.InputContainer top="380px">
        <CD.Input
          type="text"
          value={childNickname}
          onChange={(e) => setChildNickname(e.target.value)}
          placeholder="별명을 입력하세요"
        />
      </CD.InputContainer>

      {/* 등하원 기관 선택 */}
      <CD.LabelContainer top="436px">
        {/* 아이콘 */}
        <CD.InstitutionIcon />
        <CD.Label>등하원/교 기관</CD.Label>
      </CD.LabelContainer>
      <CD.ChoiceContainer top="479px">
        {['어린이집', '유치원', '초등학교', '중학교', '그 외'].map(
          (institutionOption) => (
            <CD.ChoiceButton
              key={institutionOption}
              selected={institution === institutionOption}
              onClick={() => handleInstitution(institutionOption)}
            >
              {/* 텍스트 출력 */}
              {institutionOption}
            </CD.ChoiceButton>
          )
        )}
      </CD.ChoiceContainer>

      {/* 등하원 일자 선택 */}
      <CD.LabelContainer top="579px">
        {/* 아이콘 */}
        <CD.ScheduleIcon />
        <CD.Label>등하원/교 일자</CD.Label>
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
      <CD.TimeContainer>
        <CD.TimeLabelContainer>
          <CD.TimeIcon />
          <CD.TimeLabel>등하원/교 시간</CD.TimeLabel>
          <CD.TimeSubText>24시간 기준으로 기재</CD.TimeSubText>
        </CD.TimeLabelContainer>

        <CD.TimeInputContainer>
          <CD.TimeTextLabel hasValue={startWork.length > 0}>
            등원/교 시간
          </CD.TimeTextLabel>
          {/* 값이 있는지 여부를 스타일에 전달 (있을 시 색상 변경) */}
          <CD.TimeInput
            type="text"
            value={startWork}
            onChange={(e) => handleTimeChange(e, setStartWork)}
            hasValue={startWork.length > 0} // 값이 있는지 여부를 스타일에 전달 (있을 시 색상 변경)
            placeholder="00:00"
          />
        </CD.TimeInputContainer>
        <CD.DashedLine />
        <CD.TimeInputContainer>
          <CD.TimeTextLabel hasValue={endWork.length > 0}>
            하원/교 시간
          </CD.TimeTextLabel>
          <CD.TimeInput
            type="text"
            value={endWork}
            onChange={(e) => handleTimeChange(e, setEndWork)}
            placeholder="00:00"
            hasValue={endWork.length > 0} // 값이 있는지 여부를 스타일에 전달 (있을 시 색상 변경)
          />
        </CD.TimeInputContainer>
      </CD.TimeContainer>

      {/* 반려동물 종 선택 */}
      <CD.LabelContainer top="887px">
        {/* 아이콘 */}
        <CD.PetIcon />
        <CD.Label>반려동물은 어떤 동물인가요?</CD.Label>
      </CD.LabelContainer>
      <CD.ChoiceContainer top="930px">
        {['강아지', '고양이', '그 외'].map((speciesOption) => (
          <CD.ChoiceButton
            top="930px"
            key={speciesOption}
            selected={species === speciesOption}
            onClick={() => handleSpecies(speciesOption)}
          >
            {speciesOption}
          </CD.ChoiceButton>
        ))}
      </CD.ChoiceContainer>

      {/* 반려동물 별명 입력 */}
      <CD.LabelContainer top="986px">
        {/* 아이콘 */}
        <CD.PetIcon />
        <CD.Label>반려동물의 별명으로 사용할 이름을 입력하세요.</CD.Label>
      </CD.LabelContainer>
      {/* 별명 입력란 */}
      <CD.InputContainer top="1029px">
        <CD.Input
          type="text"
          value={petNickname}
          onChange={(e) => setPetNickname(e.target.value)}
          placeholder="별명을 입력하세요"
        />
      </CD.InputContainer>

      {/* 하단 버튼들 */}
      <CD.NextBtn>
        <CD.SecondaryButton>해당사항 없음</CD.SecondaryButton>
        <CD.PrimaryButton>다음</CD.PrimaryButton>
      </CD.NextBtn>
    </CD.Container>
  );
}
export default ChildDetail;
