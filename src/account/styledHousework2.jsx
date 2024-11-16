import styled from "styled-components";

// 페이지 컨테이너
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: white;
  border: 1px solid black;
  padding: 0;
  box-sizing: border-box;
`;

// 프로필 이미지
export const ProfileImg = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 17%;
  width: 120px;
  height: 120px;
`;

// 닉네임
export const Nickname = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 26.3%;
  color: #9ea2b0;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-weight: 600;
`;

// 안내 문구
export const InfoText = styled.div`
  position: absolute;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 33%;
  width: 330px;
  text-align: center;
  font-family: "Pretendard Variable";
`;

export const HighlightText = styled.span`
  color: #8f34ff;
`;

// 작업 선택 컨테이너
export const TasksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3개씩 배치 */
  gap: 15px; /* 요소 간 간격 */
  justify-items: center;
  margin-top: 30px;
  padding: 0 10px;
`;

// 작업 버튼
export const TaskButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  position: relative; /* 기준 위치 */
  width: 102px; /* 이미지와 동일한 크기 */
  height: 122px; /* 이미지와 라벨 포함 크기 */
  top: 230%;
`;

// 작업 이미지
export const TaskImage = styled.img`
  width: 102px;
  height: 102px;
  border-radius: 50%; /* 동그란 모양 */
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;
  z-index: 1; /* 오버레이보다 위에 표시 */
`;

// 보라색 오버레이
export const Overlay = styled.div`
  width: 102px;
  height: 102px;
  border-radius: 50%;
  background-color: rgba(143, 52, 255, 0.3); /* 보라색 투명 오버레이 */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2; /* 이미지 위에 표시 */
  pointer-events: none; /* 클릭 방지 */
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
`;

// 작업 라벨
export const TaskLabel = styled.div`
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#8f34ff" : "#9ea2b0")};
  margin-top: 8px;
  z-index: 3; /* 이미지와 오버레이 위에 표시 */
  font-family: "Pretendard Variable";
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 170% */
  letter-spacing: -0.3px;
  transition: color 0.3s ease-in-out; /* 부드러운 색상 전환 */
  width: 100px;
`;

// 건너뛰기 텍스트
export const SkipText = styled.div`
  margin-top: 320px;
  cursor: pointer;
  color: #141414;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
  margin-left: 76px;

  .skip {
    text-decoration: underline; /* 기본적으로 밑줄 표시 */
  }

  &:hover .skip {
    color: #8f34ff; /* 호버 시 색상 변경 */
  }
`;

// 다음 버튼
export const NextBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 95%;
  width: 334px;
  height: 57px;
  flex-shrink: 0;
  background-image: url("/images/NextBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 9999; /* 가장 높은 z-index 설정 */
`;
