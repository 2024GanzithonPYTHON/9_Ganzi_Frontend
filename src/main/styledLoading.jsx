import { styled } from 'styled-components';

// 페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: white;
  border: 1px solid #fafafa;
  min-height: 100vh; /* 화면 높이에 맞추어 크기 조절*/
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`;

// 로고
export const WelcomeLogo = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 55%;
  top: 380px;
  width: 181px;
  height: 175px;
  flex-shrink: 0;
  background-image: url('/images/WelcomeLogo.svg');
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

// 마이너 안내 문구
export const InfoText2 = styled.div`
  position: absolute;
  top: 510px;
  left: 20%;
  font-family: 'Pretendard Variable';
  width: 242px;
  color: #8f34ff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 162.5% */
  letter-spacing: -0.48px;
`;

// 확인 버튼
export const CompleteBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 95%;
  width: 334px;
  height: 57px;
  flex-shrink: 0;
  background-image: url('/images/StartBtn.svg');
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
