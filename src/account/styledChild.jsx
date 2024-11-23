// styledChild.js
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
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 17%;
  width: 120px;
  height: 120px;
  flex-shrink: 0;

  img {
    width: 100%; /* 부모의 너비에 맞춤 */
    height: 100%; /* 부모의 높이에 맞춤 */
    object-fit: cover; /* 이미지 비율 유지하면서 영역 채움 */
    border-radius: 50%; /* 원형으로 만들기 (선택사항) */
  }
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
  left: 67%;
  top: 33%;
  width: 330px;
  font-family: "Pretendard Variable";
`;

// 강조 문구
export const HighlightText = styled.span`
  color: #8f34ff;
`;

// 자녀 아이콘
export const ChildIcon = styled.button`
  margin-top: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 41%;
  width: 52px;
  height: 52px;
  background-image: url(${({ isSelected }) =>
    isSelected ? "/images/OnChildIcon.svg" : "/images/ChildIcon.svg"});
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
`;

// 반려동물 아이콘
export const PetIcon = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 68%;
  width: 52px;
  height: 52px;
  background-image: url(${({ isSelected }) =>
    isSelected ? "/images/OnPetIcon.svg" : "/images/PetIcon.svg"});
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
`;

// 자녀 수 선택 컴포넌트
export const ChildCount = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  color: #9ea2b0;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: -0.6px;
`;

// 반려동물 수 선택 컴포넌트
export const PetCount = styled.div`
  position: absolute;
  left: 50%;
  top: 58%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  color: #9ea2b0;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-weight: 500;
  line-height: 31px;
  letter-spacing: -0.6px;
`;

// 라벨
export const Label = styled.span`
  position: relative;
  left: 10%;
  transform: translate(-50%, -50%);
  margin-right: 70px;
  font-size: 20px;
  color: #8f34ff;
  text-align: center;
  font-family: "Pretendard Variable";
  font-weight: 500;
`;

// 카운터
export const Counter = styled.div`
  position: absolute;
  left: 70%;
  transform: translate(-50%, -50%);
  display: flex; /* Flexbox 적용 */
  flex-direction: column; /* 자식 요소를 세로 방향으로 정렬 */
  align-items: center; /* 자식 요소를 중앙 정렬 */
  justify-content: space-between; /* 자식 요소 사이에 공간 분배 */
  color: ${({ isSelected }) => (isSelected ? "#8F34FF" : "#9ea2b0")};
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-weight: 500;
`;

// 플러스 버튼
export const PlusBtn = styled.button`
  position: absolute;
  left: 200%;
  top: -10%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: transparent url("/images/PlusBtn.svg") no-repeat center;
  border: none;
  cursor: pointer;

  &:hover {
    background: transparent url("/images/OnPlusBtn.svg") no-repeat center;
  }
`;

// 마이너스 버튼
export const MinusBtn = styled.button`
  position: absolute;
  left: 200%;
  top: 30%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: transparent url("/images/MinusBtn.svg") no-repeat center;
  border: none;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background: transparent url("/images/OnMinusBtn.svg") no-repeat center;
  }
`;

// 다음 버튼
export const NextBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 95%;
  width: 334px;
  height: 57px;
  background-image: url("/images/NextBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
