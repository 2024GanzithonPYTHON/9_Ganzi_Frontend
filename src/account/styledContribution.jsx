import styled from "styled-components";

// 페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: white;
  border: 1px solid black;
  box-sizing: border-box;
`;

// 뒤로가기 버튼
export const BackBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 11%;
  top: 7%;
  width: 30px;
  height: 30px;
  background-image: url("/images/BackBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-repeat: no-repeat;
`;

// 날짜 타이틀
export const DateTitle = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 39%;
  top: 6.7%;
  color: #8f34ff;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 94.444% */
  letter-spacing: -0.54px;
`;

// 최근 우리의 집안일 기여도
export const SectionTitle = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 30.5%;
  top: 14%;
  font-family: "Pretendard Variable";
  color: #312f34;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 94.444% */
  letter-spacing: -0.54px;
`;

// 정보 텍스트
export const InfoText = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 38%;
  top: 17%;
  font-family: "Pretendard Variable";
  font-size: 12px;
  color: #9ea2b0;
  display: flex;
  align-items: center;
`;

// 정보 아이콘
export const InfoIcon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 10%;
  top: 17%;
  display: flex;
  align-items: center;
  background-image: url("/images/InfoIcon.svg");
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  background-repeat: no-repeat;
`;

// 그래프 아이콘
export const GraphIcon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 22.5%;
  left: 12%;
  display: flex;
  align-items: center;
  background-image: url("/images/GraphIcon.svg");
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  background-repeat: no-repeat;
`;

// 미니 그래프 아이콘
export const MiniGraphIcon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 22.5%;
  left: 24%;
  display: flex;
  align-items: center;
  background-image: url("/images/MiniGraphIcon.svg");
  width: 14.92px;
  height: 17px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  z-index: 9999;
`;

// 강조 박스
export const HighlightBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 56%;
  top: 22.5%;
  width: 252px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #8f34ff;
  color: #fff;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 35px;
`;

// 타임라인 컨테이너
export const TimelineContainer = styled.div`
  position: relative;
  margin-top: 250px; /* 상단 간격 조정 */
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;
  gap: 20px; /* 각 요소 간 간격 */
  width: 100%; /* 부모 컨테이너의 전체 너비 */
`;

// 회색 선
export const GrayLine = styled.div`
  width: 1px;
  height: 44px;
  background: #d9d9d9;
  margin-left: -290px;
  margin-top: -100px;
`;

// 날짜 아이콘
export const DateIcon = styled.div`
  width: 36px;
  height: 56px;
  background-image: url("/images/DateIcon.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: -290px;
  margin-top: -20px;
`;

// 기여도 박스
export const ContriBox = styled.div`
  width: 237px;
  height: 85px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 2px 13.4px 1px rgba(0, 0, 0, 0.18);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -75px;
  margin-left: 55px;
  margin-bottom: 50px;
  color: #9ea2b0;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 130.769% */
  letter-spacing: -0.39px;
  padding-left: 49px;
`;

// 해 아이콘
export const SunIcon = styled.div`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background-image: url("/images/sun.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 10px;
  margin-bottom: -30px;
  margin-left: -27px;
`;

// 달 아이콘
export const MoonIcon = styled.div`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  background-image: url("/images/moon.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: -30px;
  margin-left: -27px;
`;
