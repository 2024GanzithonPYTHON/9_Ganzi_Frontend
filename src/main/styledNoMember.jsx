import { styled } from 'styled-components';

//페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;

  background-color: #fafafa;
  background-image: url('/images/BackgroundLogo.svg');
  background-position: 126px 423px; // 이미지 위치 (가로, 세로)
  background-size: 181px 175.33px; // 이미지 크기 (너비, 높이)
  background-repeat: no-repeat;

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
  background: ${({ isActive }) =>
    isActive ? '#fbfdfe' : 'transparent'}; /* 활성화 여부에 따른 배경색 */
  color: ${({ isActive }) =>
    isActive ? '#8e07fc' : '#9ea2b0'}; /* 활성화 여부에 따른 글자색 */
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

// 초대 메시지1
export const InviteMessage1 = styled.div`
  margin: 42px;
  text-align: center;
  color: #312f34;
  font-family: 'Pretendard Variable';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 85% */
  letter-spacing: -0.6px;
`;

// 초대 메시지2
export const InviteMessage2 = styled.div`
  margin: 21px;
  text-align: center;
  color: #312f34;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
`;

// 초대 버튼
export const InviteButton = styled.button`
  width: 327px;
  height: 51px;
  border-radius: 13px;
  border: none;
  background: #8e07fc;

  margin: 21px auto;
  padding: 10px 20px;
  color: #fff;
  font-family: 'Pretendard Variable';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
  cursor: pointer;
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
  background-image: url('/images/Add.svg');
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
