import { styled } from 'styled-components';

//페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: #fafafa;
  border: 1px solid black;
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
  left: 50%; //가운데 정렬
  text-align: center;
  top: 33%;
  width: 330px;
  font-family: 'Pretendard Variable';
`;

// 강조 문구
export const HighlightText = styled.span`
  color: #8f34ff;
`;

// 아이 별명 컨테이너
export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 390px;
  left: 29px;
`;

// 라벨
export const Label = styled.div`
  color: #8f34ff;
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.03em;
`;

// 아이 별명 아이콘
export const ChildIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('/images/CD_Child.svg');
  background-size: cover; //이미지 안잘리게
`;

// 아이 별명 입력란 컨테이너
export const InputContainer = styled.div`
  position: absolute;
  top: 430px;
  left: 33px;
  width: 327px;
  height: 35px;
  background: #ffffff;
  border-radius: 6px;
`;

// 별명 입력란 스타일
export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 31px;
  color: #8f34ff;
  background: transparent;
  border: none;
  outline: none;
  letter-spacing: -0.03em;

  &::placeholder {
    color: #9ea2b0;
    letter-spacing: -0.03em;
  }
`;
