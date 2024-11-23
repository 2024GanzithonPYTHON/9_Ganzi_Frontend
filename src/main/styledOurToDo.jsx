import styled from 'styled-components';

// 페이지 배경
export const PageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background-color: #fafafa;
  border: 1px solid black;
  min-height: 100vh; // 화면 높이에 맞추어 크기 조절
  box-sizing: border-box; // 패딩 width에 포함
  overflow-y: auto; // 세로 스크롤 활성화
  overflow-x: hidden; // 가로 스크롤 제거
`;

export const Content = styled.div`
  position: relative;
  padding: 20px 35px;
`;

// 페이지 헤더 컨테이너
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
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
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
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

export const Section = styled.div`
  margin-top: 20px;
`;

export const SectionTitle = styled.div`
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

// 할일 박스
export const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 327px;
  height: 63px;
  flex-shrink: 0;
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

// 집안일 이름
export const TaskText = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
`;

// 집안일 이름 수정
export const TaskInput = styled.input`
  color: #000;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
  text-align: left;
  outline: none;
  border: none;
  &::placeholder {
    color: #000;
  }
`;

export const TaskIcon = styled.img`
  width: 28px;
  height: 28px;
  margin: auto 12px;
  cursor: pointer;
`;

// 체크박스 스타일
export const CheckBox = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
  position: relative;
  margin-left: auto;
  margin-right: 21px;
`;

export const FooterButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  width: 100%;
  background-color: ${(props) => (props.edit ? '#7f51ff' : '#f0f0f0')};
  color: ${(props) => (props.edit ? '#fff' : '#7f51ff')};
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.edit ? '#6e47e6' : '#d9d9d9')};
  }
`;

// 푸터

export const FooterBackground = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0; // 하단 위치 고정
  left: 0; // 페이지의 왼쪽 기준
  width: 393px;
  height: 74px;
  padding: 0px;
  margin-left: 0px;
  background-color: #fff;
  margin-bottom: 0px;
`;

// 일정 조정 버튼
export const Cal = styled.div`
  width: 36px;
  height: 46px;
  background-image: url('/images/Cal.svg');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

// 할일 추가 버튼
export const Add = styled.div`
  width: 60px;
  height: 81px;
  background-image: url('/images/OnAdd.svg');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

// 관리 모드 완료 버튼
export const EditOut = styled.div`
  width: 60px;
  height: 81px;
  background-image: url('/images/EditOut.svg');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

// 기여도 버튼
export const Contribution = styled.div`
  width: 53px;
  height: 46px;

  background-image: url('/images/Contribution.svg');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
