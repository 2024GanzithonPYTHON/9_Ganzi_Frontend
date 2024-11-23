import styled from "styled-components";

// 페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 1052px;
  background: white;
  border: 1px solid #fafafa;
  box-sizing: border-box;
`;

// 연회색 배경
export const LightGrayBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 32%;
  margin: 0 auto;
  width: 393px;
  height: 459px;
  box-sizing: border-box;
  background: #fafafa;
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
  top: 13%;
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
  top: 15.3%;
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
  top: 15.3%;
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
  top: 19%;
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
  top: 19%;
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
  top: 19%;
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
  position: relative; /* 부모 컨테이너를 relative로 설정 */
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const StyledSpan = styled.span`
  position: relative;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? "white" : "#9ea2b0")};
  margin-top: -60px;
  font-family: "Pretendard Variable";
  font-weight: 500;
  z-index: 9999;
  margin-bottom: 25px;
  margin-left: -300px;
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledSpan2 = styled.span`
  position: relative;
  font-size: 14px;
  color: ${({ isActive }) => (isActive ? "#8f34ff" : "#9ea2b0")};
  margin-top: -28px;
  font-family: "Pretendard Variable";
  font-weight: 500;
  z-index: 9999;
  margin-left: -300px;
`;

// 회색 선
export const GrayLine = styled.div`
  width: 1px;
  height: 44px;
  background: #d9d9d9;
  margin-left: -300px;
  margin-top: -110px;
`;

// 날짜 아이콘
export const DateIcon = styled.div`
  width: 36px;
  height: 56px;
  background-image: url(${({ isActive }) =>
    isActive ? "/images/OnDateIcon.svg" : "/images/DateIcon.svg"});
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: -300px;
  margin-top: -15px;
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
  margin-top: -55px;
  margin-left: 45px;
  margin-bottom: 70px;
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
  margin-left: -30px;
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
  margin-left: -30px;
`;

// 기여도 비교
// 배경 박스
export const WhiteBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 28%;
  top: 72%;
  width: 156px;
  height: 189px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  background: #fff;
  box-shadow: 0px 2px 13.4px 1px rgba(0, 0, 0, 0.18);
`;

// 프로필 사진
export const ContriProfile = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 15%;
  top: 65.5%;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  z-index: 9999;
`;

// 닉네임
export const NickName = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 29%;
  top: 65.5%;
  color: #312f34;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
  z-index: 9999;
  text-align: center;s
`;

// 그래프

export const GraphContainer = styled.div`
  position: relative;
  width: 120px;
  height: 60px; /* 반원 높이 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PercentageText = styled.div`
  position: absolute;
  top: 52%; /* 기존 50%에서 조정 */
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Pretendard Variable";
  color: #8f34ff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px; /* 94.444% */
  letter-spacing: -0.54px;
  z-index: 1;
`;

export const SvgContainer = styled.svg`
  width: 120px;
  height: 120px; /* 원 전체 크기 */
`;

export const CircleBackground = styled.circle`
  fill: none;
  stroke: #e5e5e5; /* 회색 */
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: ${({ circumference }) => circumference};
  stroke-dashoffset: 0;
  transform: rotate(-90deg);
  transform-origin: center;
`;

export const CircleProgress = styled.circle`
  fill: none;
  stroke: #8f34ff; /* 보라색 */
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: ${({ circumference }) => circumference};
  stroke-dashoffset: ${({ offset }) => offset};
  transform: rotate(-90deg);
  transform-origin: center;
  transition: stroke-dashoffset 0.5s ease-in-out;
`;

// 강조 텍스트
export const HighlightText = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 87%;
  color: #8f34ff;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px; /* 161.111% */
  letter-spacing: -0.54px;
  width: 220px;
  text-align: center;
`;

// 기여도 그래프
export const GraphWrapper = styled.div`
  position: absolute;
  top: 32%;
  left: 16%;
  width: 104px;
  height: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
