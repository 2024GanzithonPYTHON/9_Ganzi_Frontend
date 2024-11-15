import { styled } from 'styled-components';

//페이지 배경
export const Container = styled.div`
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

// 프로필 이미지
export const ProfileImg = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 17%;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
`;

// 닉네임
export const Nickname = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 26.3%;
  color: #9ea2b0;
  font-family: 'Pretendard Variable';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
`;

// 안내 문구
export const InfoText = styled.div`
  position: absolute;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 85% */
  letter-spacing: -0.6px;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%; //가운데 정렬
  text-align: center;
  top: 33%;
  width: 330px;
  font-family: 'Pretendard Variable';
`;

// 강조 문구
export const HighlightText = styled.span`
  color: #8f34ff;
`;

//버튼 컨테이너
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 337px;
  left: 29px;
  right: 29px;
  gap: 15px; /* 버튼 간격 */
`;

// 출퇴근 일정 선택 버튼
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
  cursor: pointer;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#7b2fd6' : '#e5e5e5')};
  }
`;

// 출퇴근 요일 선택 컨테이너
export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 390px;
  left: 29px;
`;

// 라벨
export const Label = styled.div`
  color: #8f34ff;
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
`;

// 출근 일자 아이콘
export const ScheduleIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('/images/ScheduleDays.svg');
  background-size: cover; //이미지 안잘리게
`;

// 요일 선택 컨테이너
export const DayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 420px;
  left: 29px;
  right: 29px;
`;

// 요일 버튼
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
  position: absolute;
  right: 29px;
  top: 470px;
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
`;
