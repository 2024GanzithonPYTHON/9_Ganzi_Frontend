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

// ~아이 별명~
// 별명, 등하원 기관, 등하원 요일 컨테이너
export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-top: 11px;
  margin-left: 63px;
`;

// 라벨 (텍스트)
export const Label = styled.div`
  color: #8f34ff;
  font-family: 'Pretendard';
  font-weight: medium;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 31px; /* 206.667% */
  letter-spacing: -0.45px;
`;

// 별명 아이콘
export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${(props) => props.icon});
  background-size: cover; //이미지 안잘리게
  margin-bottom: 12px;
`;

// 별명 입력란 컨테이너
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 327px;
  height: 35px;
  background: #ffffff;
  border-radius: 6px;
  margin-bottom: 21px;
`;

// 입력란 스타일
export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 31px;
  color: #8f34ff;
  background: transparent;
  border: none;
  outline: none;
  letter-spacing: -0.03em;

  &::placeholder {
    color: #9ea2b0;
    letter-spacing: -0.03em;
  }
`;

// ~등하원 기관선택~
// 등하원 기관 버튼 컨테이너
export const ChoiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  margin-left: 33px;
`;

// 등하원 기관 버튼
export const ChoiceButton = styled.div`
  width: 103px;
  height: 35px;
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
  // '그 외'가 입력 필드로 변경된 경우 스타일
  input {
    width: 100%;
    height: 100%;
    padding: 0 8px;
    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
    background: transparent;
    border: none;
    outline: none;
    text-align: center;

    &::placeholder {
      color: #ffffff;
      opacity: 0.7;
    }
  }
`;

// ~등하원 일자 선택~
// 등하원 일자 버튼 컨테이너
export const DayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 11px;
  margin-bottom: 16px;
`;

// 등하원 일자 버튼
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
  width: 100%;
  margin-bottom: 25px;
  margin-right: 63px;
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

// ~등하원 시간 입력~
// 등하원 시간 입력 컨테이너
export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

// 부연 설명 텍스트
export const TimeSubText = styled.div`
  font-size: 12px;
  color: #9ea2b0;
  letter-spacing: -0.03em;
  margin-bottom: 12px;
`;

// 시간 입력 컨테이너
export const TimeInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 17px;
`;

// 시간 텍스트 라벨 (등원/교 시간, 하원/교 시간)
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

// 등원, 하원 시간 사이 구분선
export const DashedLine = styled.div`
  width: 332px;
  height: 1px;
  left: 28px;
  background-image: url('/images/DashLine.svg');
  background-size: cover;
`;
