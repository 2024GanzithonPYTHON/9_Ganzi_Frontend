import { styled } from "styled-components";

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

// 뒤로가기 버튼
export const BackBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 11%;
  width: 30px;
  top: 7%;
  height: 30px;
  flex-shrink: 0;
  background-image: url("/images/BackBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-repeat: no-repeat;
`;

// 페이지 제목
export const PageTitle = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  width: 100px;
  top: 7%;
  color: #312f34;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 85% */
  letter-spacing: -0.6px;
  text-align: center;
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

// 안내 문구
export const InfoText = styled.div`
  position: absolute;
  color: var(--kakao-logo, #000);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 35px; /* 175% */
  letter-spacing: -0.6px;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 20%;
  width: 330px;
  font-family: "Pretendard Variable";
`;

// 마이너 안내 문구
export const InfoText2 = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 51%;
  top: 26%;
  width: 330px;
  font-family: "Pretendard Variable";
  color: #9ea2b0;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 121.429% */
  letter-spacing: -0.42px;
`;

// 초대코드 상자
export const CodeBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 31%;
  font-family: "Pretendard Variable";
  width: 327px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 13px;
  border: 1px solid #8f34ff;
  color: #8f34ff;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 94.444% */
  letter-spacing: -0.54px;
  text-align: center;
  padding-top: 16px;
`;

// 초대코드 복사하기 버튼
export const CopyBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 95%;
  width: 334px;
  height: 57px;
  flex-shrink: 0;
  background-image: url("/images/CopyBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 9999; /* 가장 높은 z-index 설정 */
`;
