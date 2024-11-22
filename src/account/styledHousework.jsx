import { styled } from "styled-components";

// 페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: white;
  border: 1px solid #fafafa;
  min-height: 100vh;
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

// 강조 문구
export const HighlightText = styled.span`
  color: #8f34ff;
`;

// 시간 버튼 컨테이너
export const TimeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 310px;
  gap: 15px; // 버튼 간격
`;

// 시간 버튼
export const TimeButton = styled.button`
  width: 331px;
  height: 62px;
  flex-shrink: 0;
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#9EA2B0")};
  background-color: ${({ isSelected }) => (isSelected ? "#8f34ff" : "#fff")};
  border-radius: 9px;
  font-size: 16px;
  font-family: "Pretendard Variable";
  font-weight: 500;
  cursor: pointer;
  border: 1px
    ${({ children }) => (children === "사용자 설정" ? "dashed" : "solid")}
    ${({ isSelected }) => (isSelected ? "#8f34ff" : "#ccc")};

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#7b2fd6" : "#e5e5e5"};
  }
`;

// 사용자 설정 입력 컨테이너
export const CustomTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

// 사용자 설정 라벨
export const CustomTimeLabel = styled.label`
  font-size: 16px;
  color: #8f34ff;
  margin-bottom: 10px;
  font-family: "Pretendard Variable";
`;

// 사용자 입력 필드 스타일
export const CustomTimeInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  color: #fff;
  font-size: 16px;
  text-align: center;
  outline: none;
  font-family: "Pretendard Variable";

  &::placeholder {
    color: #ccc;
    font-family: "Pretendard Variable";
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
`;
