import { styled } from 'styled-components';

//페이지 배경
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: #fafafa;
  border: 1px solid black;
  min-height: 100vh; /* 화면 높이에 맞추어 크기 조절*/
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`;

// ~기본 프로필~
// 프로필 섹션
export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

// 프로필 이미지
export const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  background: #efefef;
  border-radius: 50%;
  margin-bottom: 20px;
`;

// 닉네임
export const Nickname = styled.div`
  color: #9ea2b0;
  font-family: 'Pretendard Variable';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
  margin-bottom: 25px;
`;

// 안내 문구
export const InfoText = styled.div`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5; /* 85% */
  letter-spacing: -0.6px;
  text-align: center;
  width: 330px;
  font-family: 'Pretendard Variable';
`;

// 강조 문구
export const HighlightText = styled.span`
  color: #8f34ff;
`;

// ~출퇴근 일정/일정하지 않음 선택~
//버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  top: 337px;
  left: 29px;
  right: 29px;
  gap: 15px; /* 버튼 간격 */
  margin-top: 44px;
`;

// 출퇴근 일정 여부 선택 버튼
export const ScheduleButton = styled.div`
  width: 157px;
  height: 38px;
  background: ${({ selected }) => (selected ? '#8F34FF' : '#FFFFFF')};
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#9EA2B0')};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.03em;
  cursor: pointer;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#7b2fd6' : '#e5e5e5')};
  }
`;

// ~출근 일자 선택~
// 출근 일자 선택 컨테이너
export const DaySelectionSection = styled.div`
  margin-top: 40px; /* 수정: 고정된 top 대신 여백으로 조정 */
  width: 100%; /* 전체 화면 너비 */
  padding: 0 20px; /* 양쪽 여백 */
`;
// 출근 일자 선택 컨테이너
export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
  margin-left: 33px;
`;

// 출근 일자 라벨
export const Label = styled.div`
  color: #8f34ff;
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.03em;
`;

// 출근 일자 아이콘
export const ScheduleIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('/images/ScheduleDays.svg');
  background-size: cover; //이미지 안잘리게
`;

// 일자 버튼 컨테이너
export const DayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto 33px;
`;

// 일자 버튼
export const Day = styled.div`
  width: 38px;
  height: 38px;
  background: ${(props) => (props.selected ? '#8F34FF' : '#FFFFFF')};
  color: ${(props) => (props.selected ? '#FFFFFF' : '#9EA2B0')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#7b2fd6' : '#e5e5e5')};
  }
`;

// 매일 선택 체크박스 컨테이너
export const SelectAllContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 33px;
  cursor: pointer;
`;

// 매일 선택 체크 아이콘
export const SelectAllIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${({ isSelected }) =>
    isSelected ? '/images/OnSelectAll.svg' : '/images/SelectAll.svg'});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 8px;
  border: none;
  cursor: pointer;
`;

// 매일 선택 텍스트
export const SelectAllText = styled.div`
  color: #9ea2b0;
  font-family: 'Pretendard';
  font-size: 15px;
  letter-spacing: -0.03em;
`;

// ~출퇴근 시간 입력~
// 출퇴근 시간 컨테이너
export const TimeContainer = styled.div`
  margin-top: 50px;
  text-align: center;
`;

// 출퇴근 시간 라벨 컨테이너
export const TimeLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

// 시간 아이콘
export const TimeIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('/images/ScheduleTime.svg');
  background-size: cover;
`;

// 시간 라벨
export const TimeLabel = styled.div`
  color: #8f34ff;
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.03em;
`;

// 부연 설명 텍스트
export const TimeSubText = styled.div`
  font-size: 12px;
  color: #9ea2b0;
  letter-spacing: -0.03em;
`;

// 시간 입력 컨테이너
export const TimeInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 21px;
`;

// 시간 텍스트 라벨 (출근/퇴근 시간)
export const TimeTextLabel = styled.div`
  color: ${({ hasValue }) =>
    hasValue ? '#8f34ff' : '#9ea2b0'}; // 값이 있을 때 보라색
  font-family: 'Pretendard';
  font-size: 15px;
  text-align: center;
  letter-spacing: -0.03em;
`;

// 시간 입력 필드
export const TimeInput = styled.input`
  width: 43px;
  height: 31px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: ${({ hasValue }) =>
    hasValue ? '#8f34ff' : '#000'}; // 값이 있을 때 보라색
  border: none;
  background-color: transparent;
  outline: none;

  &::placeholder {
    // 입력 전 색상
    color: #9ea2b0;
  }
`;

// 출근 시간과 퇴근 시간 사이 구분선
export const DashedLine = styled.div`
  width: 332px;
  height: 1px;
  left: 28px;
  background-image: url('/images/DashLine.svg');
  background-size: cover;
`;

// 확인 버튼
export const OkButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 334px;
  height: 57px;

  background: #8f34ff;
  border-radius: 15px;
  border: none;
  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.03em;
  margin-top: auto;
  margin-bottom: 21px;
`;
