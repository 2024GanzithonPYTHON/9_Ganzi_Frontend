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
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 26.3%;
  color: #9ea2b0;
  font-family: 'Pretendard Variable';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;
`;

// 안내 문구
export const InfoText = styled.div`
  position: absolute;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 85% */
  letter-spacing: -0.6px;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 65%;
  top: 33%;
  width: 330px;
  font-family: 'Pretendard Variable';
`;

// 강조 문구
export const HighlightText = styled.span`
  color: #8f34ff;
`;

// 남성
export const Male = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 32%;
  top: 45%;
  width: 31px;
  height: 96px;
  flex-shrink: 0;
  background-image: url(${({ isSelected }) =>
    isSelected ? '/images/OnMaleIcon.svg' : '/images/MaleIcon.svg'});
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-image: url('images/OnMaleIcon.svg');
  }
`;

// 여성
export const Female = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 69%;
  top: 45%;
  width: 35px;
  height: 98px;
  flex-shrink: 0;
  background-image: url(${({ isSelected }) =>
    isSelected ? '/images/OnFemaleIcon.svg' : '/images/FemaleIcon.svg'});
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-image: url('images/OnFemaleIcon.svg');
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
  background-image: url('/images/NextBtn.svg');
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

// 연령대 선택 버튼
export const AgeButton = styled.button`
  width: 94px; /* 버튼의 너비 */
  height: 87px; /* 버튼의 높이 */
  margin: 10px; /* 버튼 간의 여백 */
  background-color: ${({ isSelected }) =>
    isSelected ? '#8F34FF' : 'transparent'}; /* 선택된 경우 보라색 */
  border: 1px solid ${({ isSelected }) => (isSelected ? '#8F34FF' : '#EFEFEF')}; /* 테두리 색상 */
  cursor: pointer; /* 커서 스타일 */
  font-size: 14px; /* 글자 크기 */
  color: ${({ isSelected }) =>
    isSelected ? '#fff' : '#9EA2B0'}; /* 선택된 경우 글자 색상 */
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard Variable';

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#7b2fd6' : '#e5e5e5'};
  }
`;
