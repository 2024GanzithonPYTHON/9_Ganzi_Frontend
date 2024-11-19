import styled from 'styled-components';

// 페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background-color: #fafafa;
  border: 1px solid black;
  min-height: 100vh; // 화면 높이에 맞추어 크기 조절
  padding: 20px 35px;
  box-sizing: border-box; // 패딩 width에 포함
`;

// 페이지 헤더 컨테이너
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 오늘 날짜
export const Date = styled.div`
  font-size: 16px;
  font-weight: 600px;
  color: #312f34;
  font-family: 'Pretendard Variable';
`;

// 프로필 이미지
export const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ddd;
  cursor: pointer;
`;

// ~우리/나의 할일 토글 버튼~
// 토글 버튼 컨테이너
export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  margin: 21px auto;
  background-color: #efefef;
  border-radius: 40px;
`;

// 개별 토글 버튼
export const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 42px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 40px;
  background: ${({ isActive }) => (isActive ? '#fbfdfe' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#8e07fc' : '#9ea2b0')};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
`;

// 아이콘 스타일
export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

// '집안을 콕콕 정리했어요' 텍스트
export const TextOur = styled.div`
  width: 178px;
  height: 17px;
  left: calc(50% - 178px / 2 - 74.5px);
  background-image: url('/images/TextOurToDo.svg');
  background-size: cover;
  margin-top: 21px;
`;

// '오늘의 집안일' 텍스트
export const TextMy = styled.div`
  width: 95px;
  height: 17px;
  left: calc(50% - 178px / 2 - 74.5px);
  background-image: url('/images/TextMyToDo.svg');
  background-size: cover;
  margin-top: 21px;
`;

// ~할일~
// 할일 컨테이너
export const ToDoSection = styled.div`
  margin: 21px 0;
`;

// 오전/오후 레이블
export const TimeLabel = styled.h2`
  display: flex;
  align-items: center;
  width: 327px;
  height: 23px;
  color: #fff;
  font-family: 'Pretendard - Variable';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; // 113.333%
  letter-spacing: -0.45px;
  border-radius: 6px;
  background: #8f34ff;
  margin-bottom: 10px; // 하단 여백
  text-indent: 12px; // 텍스트를 안쪽으로 들여쓰기
`;

// 개별 할일 박스
export const ToDoBox = styled.div`
  display: flex;
  align-items: center;
  width: 327px;
  height: 63px;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 2px 13.4px 1px rgba(0, 0, 0, 0.18); // 그림자 효과
  margin-bottom: 12px;
`;

// 개별 할일 박스 안 아이콘
export const ToDoIcon = styled.img`
  width: 28px;
  height: 28px;
  margin: auto 12px;
`;

// 개별 할일 박스 안 텍스트 컨테이너
export const ToDoTexts = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬로 변경 */
  justify-content: center;
`;

// 같이해요/00씨의 할일
export const Ment = styled.div`
  font-family: 'Pretendard-Variable';

  color: #9ea2b0;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 130.769% */
  letter-spacing: -0.39px;
`;

// 개별 할일 이름
export const TaskName = styled.div`
  font-family: 'Pretendard-Variable';
  font-size: 15px;
  color: var(--kakao-logo, #000);
  font-style: normal;
  font-weight: 700;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
  margin-top: 4px;
`;

// 체크박스
export const CheckBox = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
  position: relative;
  margin-left: auto;
  margin-right: 21px;
`;

// ~푸터~
// 푸터
export const FooterBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 74px;
  left: 0;
  background-color: #fff;
`;

// 일정 조정 버튼
export const Cal = styled.div`
  position: absolute;
  width: 36px;
  height: 46px;
  left: 55px;
  top: 792px;
  background-image: url('/images/Cal.svg');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

// 할일 추가 버튼
export const Add = styled.div`
  position: absolute;
  width: 60px;
  height: 81px;
  left: 163px;
  top: 757px;
  background-image: url('/images/OnAdd.svg');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

// 기여도 버튼
export const Contribution = styled.div`
  position: absolute;
  width: 53px;
  height: 46px;
  left: 285px;
  top: 792px;
  background-image: url('/images/Contribution.svg');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
