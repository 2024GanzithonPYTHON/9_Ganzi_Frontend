import React, { useState, useEffect } from 'react';
import * as WD from './styledWorkDetail';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function WorkDetail() {
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const [isScheduleFixed, setIsScheduleFixed] = useState(null); // 출퇴근 일정함 / 일정하지 않음
  const [selectedDays, setSelectedDays] = useState([]); // 요일 선택
  const [allDaysSelected, setAllDaysSelected] = useState(false); // 매일 선택

  const [startWork, setStartWork] = useState(''); // 출근 시간
  const [endWork, setEndWork] = useState(''); // 퇴근 시간

  const navigate = useNavigate();

  // localStorage에서 닉네임과 프로필 이미지 가져오기
  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    const storedProfileImage = localStorage.getItem('profileImage');

    if (!storedNickname || !storedProfileImage) {
      console.error(
        'Profile information is missing. Redirecting to login page...'
      );
      alert('프로필 정보를 가져오지 못했습니다. 다시 로그인해주세요.');
      navigate('/register'); // 로그인 페이지로 리다이렉트
    } else {
      setNickname(storedNickname);
      setProfileImage(storedProfileImage);
      console.log('Profile loaded:', {
        nickname: storedNickname,
        image: storedProfileImage,
      });
    }
  }, [navigate]);

  const handleSave = () => {
    const workData = {
      workDays: selectedDays,
      startTime: startWork,
      endTime: endWork,
    };

    // 데이터를 navigate로 전달
    navigate('/infoinput', { state: { workData } });
  };

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
    <WD.Container>
      <WD.ProfileSection>
        <WD.ProfileImg>
          <img src={profileImage} alt={`${nickname}'s profile`} />
        </WD.ProfileImg>
        <WD.Nickname>{nickname}</WD.Nickname>
      </WD.ProfileSection>
      <WD.InfoText>
        <WD.HighlightText>직장 생활</WD.HighlightText>
        <span>
          에 대해 간단히 알려주세요!
          <br />
          집콕콕이 더 똑똑해질 거예요.
        </span>
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

      {/* 출근 일자 선택 */}
      <WD.DaySelectionSection>
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
      </WD.DaySelectionSection>

      {/* 출퇴근 시간 입력 */}
      <WD.TimeContainer>
        <WD.TimeLabelContainer>
          <WD.TimeIcon />
          <WD.TimeLabel>출퇴근 시간</WD.TimeLabel>
          <WD.TimeSubText>24시간 기준으로 기재</WD.TimeSubText>
        </WD.TimeLabelContainer>

        <WD.TimeInputContainer>
          <WD.TimeTextLabel hasValue={startWork.length > 0}>
            출근 시간
          </WD.TimeTextLabel>
          {/* 값이 있는지 여부를 스타일에 전달 (있을 시 색상 변경) */}
          <WD.TimeInput
            type="text"
            value={startWork}
            onChange={(e) => handleTimeChange(e, setStartWork)}
            hasValue={startWork.length > 0} // 값이 있는지 여부를 스타일에 전달 (있을 시 색상 변경)
            placeholder="00:00"
          />
        </WD.TimeInputContainer>
        <WD.DashedLine />
        <WD.TimeInputContainer>
          <WD.TimeTextLabel hasValue={endWork.length > 0}>
            퇴근 시간
          </WD.TimeTextLabel>
          <WD.TimeInput
            type="text"
            value={endWork}
            onChange={(e) => handleTimeChange(e, setEndWork)}
            placeholder="00:00"
            hasValue={endWork.length > 0} // 값이 있는지 여부를 스타일에 전달 (있을 시 색상 변경)
          />
        </WD.TimeInputContainer>
      </WD.TimeContainer>

      {/* 하단 버튼 */}
      <WD.OkButton onClick={() => navigate('/infoinput')}>확인</WD.OkButton>
    </WD.Container>
  );
}

export default WorkDetail;
