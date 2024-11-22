import React, { useState, useEffect } from 'react';
import * as CD from './styledAddChild';
import * as WD from './styledWorkDetail';

import { useNavigate } from 'react-router-dom';

export default function AddChild() {
  const [childNickname, setChildNickname] = useState(''); // 아이 별명
  const [institution, setInstitution] = useState(''); // 등하원 기관
  const [customInstitution, setCustomInstitution] = useState(''); // 사용자 입력 기관
  const [isCustomSelected, setIsCustomSelected] = useState(false); // '그 외' 선택 여부
  const [selectedDays, setSelectedDays] = useState([]); // 요일 선택
  const [allDaysSelected, setAllDaysSelected] = useState(false); // 매일 선택

  const [startSchool, setStartSchool] = useState(''); // 등원 시간
  const [endSchool, setEndSchool] = useState(''); // 하원 시간

  const navigate = useNavigate();

  // 등하원 기관 선택
  const handleInstitution = (newInstitution) => {
    if (newInstitution === '그 외') {
      setIsCustomSelected(true); // '그 외' 선택 시 입력 필드 활성화
      setInstitution('');
    } else {
      setIsCustomSelected(false); // 다른 버튼 클릭 시 입력 필드 비활성화
      setInstitution(newInstitution);
    }
  };
  // '그 외' 입력 처리
  const handleCustomInstitutionChange = (e) => {
    setCustomInstitution(e.target.value);
    setInstitution(e.target.value);
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

  return (
    <CD.Container>
      {/* 프로필: 추후 닉네임 변수화 필요 */}
      <WD.ProfileSection>
        <WD.ProfileImg>
          <img src="/images/ProfileImg.svg" alt="프로필 이미지" />
        </WD.ProfileImg>
        <WD.Nickname>홍길동</WD.Nickname>
      </WD.ProfileSection>
      <WD.InfoText>
        <span>우리 </span>
        <WD.HighlightText>가족에 대한 정보</WD.HighlightText>
        <span>
          를 알려주시면,
          <br />더 똑똑한 분담 계획을 세울 수 있어요!
        </span>
      </WD.InfoText>

      {/* 아이 별명 입력 */}
      <CD.LabelContainer style={{ marginTop: '44px' }}>
        {/* 아이콘 */}
        <CD.Icon icon="/images/OnChildIcon.svg" />
        <CD.Label>아이의 별명으로 사용할 이름을 입력하세요.</CD.Label>
      </CD.LabelContainer>
      {/* 별명 입력란 */}
      <CD.InputContainer>
        <CD.Input
          type="text"
          value={childNickname}
          onChange={(e) => setChildNickname(e.target.value)}
          placeholder="별명을 입력하세요"
        />
      </CD.InputContainer>

      {/* 등하원 기관 선택 */}
      <CD.LabelContainer>
        {/* 아이콘 */}
        <CD.Icon icon="/images/Institution.svg" />
        <CD.Label>등하원/교 기관</CD.Label>
      </CD.LabelContainer>
      <CD.ChoiceContainer>
        {['어린이집', '유치원', '초등학교', '중학교', '그 외'].map(
          (institutionOption) => (
            <CD.ChoiceButton
              key={institutionOption}
              selected={
                isCustomSelected && institutionOption === '그 외'
                  ? true
                  : institution === institutionOption
              }
              onClick={() => handleInstitution(institutionOption)}
            >
              {/* '그 외'는 입력 필드로 변경 */}
              {institutionOption === '그 외' && isCustomSelected ? (
                <CD.Input
                  type="text"
                  value={customInstitution}
                  onChange={handleCustomInstitutionChange}
                  placeholder="기관 입력"
                  autoFocus
                />
              ) : (
                institutionOption
              )}
            </CD.ChoiceButton>
          )
        )}
      </CD.ChoiceContainer>

      {/* 등하원 일자 선택 */}
      <CD.LabelContainer>
        {/* 아이콘 */}
        <CD.Icon icon="/images/ScheduleDays.svg" />
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
        <CD.LabelContainer>
          <CD.Icon icon="/images/ScheduleTime.svg" />
          <CD.Label>등하원/교 시간</CD.Label>
          <CD.TimeSubText>24시간 기준으로 기재</CD.TimeSubText>
        </CD.LabelContainer>

        <CD.TimeInputContainer>
          <CD.TimeTextLabel hasValue={startSchool.length > 0}>
            등원/교 시간
          </CD.TimeTextLabel>
          {/* 값이 있는지 여부를 스타일에 전달 (있을 시 색상 변경) */}
          <CD.TimeInput
            type="text"
            value={startSchool}
            onChange={(e) => handleTimeChange(e, setStartSchool)}
            hasValue={startSchool.length > 0} // 값이 있는지 여부를 스타일에 전달 (있을 시 색상 변경)
            placeholder="00:00"
          />
        </CD.TimeInputContainer>
        <CD.DashedLine />
        <CD.TimeInputContainer>
          <CD.TimeTextLabel hasValue={endSchool.length > 0}>
            하원/교 시간
          </CD.TimeTextLabel>
          <CD.TimeInput
            type="text"
            value={endSchool}
            onChange={(e) => handleTimeChange(e, setEndSchool)}
            placeholder="00:00"
            hasValue={endSchool.length > 0} // 값이 있는지 여부를 스타일에 전달 (있을 시 색상 변경)
          />
        </CD.TimeInputContainer>
      </CD.TimeContainer>
      {/* 하단 버튼 */}
      <WD.OkButton onClick={() => navigate('/infoinput')}>확인</WD.OkButton>
    </CD.Container>
  );
}
