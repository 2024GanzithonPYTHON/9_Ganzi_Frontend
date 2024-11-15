import { styled } from "styled-components";

// 페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: white;
  border: 1px solid black;
  min-height: 100vh; /* 화면 높이에 맞추어 크기 조절*/
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
`;

// 프로필 이미지
export const DefaultProfile = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 18%;
  width: 127px;
  height: 127px;
  flex-shrink: 0;
  background-image: url("/images/DefaultProfile.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

// 로고
export const WelcomeLogo = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 55%;
  top: 58%;
  width: 181px;
  height: 175px;
  flex-shrink: 0;
  background-image: url("/images/WelcomeLogo.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

// 메인 안내 문구
export const InfoText = styled.div`
  position: absolute;
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 39px; /* 162.5% */
  letter-spacing: -0.72px;
  text-align: center;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 23%;
  width: 330px;
  font-family: "Pretendard Variable";
`;

// 마이너 안내 문구
export const InfoText2 = styled.div`
  position: absolute;
  left: 23%;
  top: 29%;
  color: #9ea2b0;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 33px; /* 183.333% */
  letter-spacing: -0.54px;
`;

// 별명 입력 input
export const InputBox = styled.input`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 39%;
  width: 330px;
  height: 40px;
  color: black; /* 사용자가 입력하는 글자 색 */
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
  border: none;
  border-bottom: 1px solid #b0b0b0;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: #9ea2b0; /* placeholder 색 */
  }

  &:focus {
    border-bottom: 2px solid #8f34ff; /* 포커스 시 색 변경 */
  }
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
  background-image: url("/images/ConfirmBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
