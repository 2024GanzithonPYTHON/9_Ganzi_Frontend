import styled from 'styled-components';

// 전체 페이지 컨테이너
export const PageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  margin-top: 0px;
  background: #fafafa;
  border: 1px solid black;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
`;
// 뒤로가기 버튼
export const BackButton = styled.div`
  position: absolute;
  width: 21px;
  height: 21.5px;
  flex-shrink: 0;
  top: 53px;
  left: 30px;
  background-image: url('/images/BackButton.svg');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

// 프로필 섹션
export const ProfileSection = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 107px;
  margin-bottom: 12px;
  padding: 0 23px;
`;

// 프로필 이미지
export const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  margin-bottom: 12px;

  img {
    width: 100%; /* 부모의 너비에 맞춤 */
    height: 100%; /* 부모의 높이에 맞춤 */
    object-fit: cover; /* 이미지 비율 유지하면서 영역 채움 */
    border-radius: 50%; /* 원형으로 만들기 (선택사항) */
  }
`;

export const UserName = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 21px;
  text-align: left;
`;

export const SubText = styled.p`
  font-size: 14px;
  color: #9ea2b0;
  text-align: left;
`;

// 출퇴근 카드
export const WorkCard = styled.div`
  width: 311px;
  height: 73px;
  background: #fff;
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-left: auto;
  margin: 30px auto 12px auto;
  cursor: pointer;

  &:hover {
    border: 1px solid #8e07fc;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// 저장된 WorkCard 스타일
export const WorkCardSaved = styled.div`
  width: 311px;
  height: 73px;
  background: #ffffff;
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-left: auto;
  margin: 33px auto 12px auto;
  cursor: pointer;
  border: 1px solid #8f34ff;

  &:hover {
    background-color: ${({ $hoverable }) =>
      $hoverable ? '#f0f0f0' : 'transparent'};
  }
  & > img {
    margin-right: 12px;
  }
`;

// 저장된 텍스트 스타일
export const SavedText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #8f34ff;
  flex: 1;
  margin-left: 16px;
`;

// 체크 아이콘 스타일
export const CheckIcon = styled.img`
  width: 24px;
  height: 24px;
`;

// 아이 카드
export const ChildCard = styled.div`
  width: 140px;
  height: 45px;
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  &:hover {
    border: 1px solid #8e07fc;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CardText = styled.span`
  font-size: 16px;
  color: #9ea2b0;
  flex: 1;
  margin-left: 16px;

  font-weight: 600;
  line-height: 17px; /* 106.25% */
  letter-spacing: -0.48px;
`;

export const PlusIcon = styled.img`
  width: 24px;
  height: 24px;
`;

// 플렉스 행
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

// 하단 버튼
export const BottomButton = styled.button`
  position: absolute;
  width: 334px;
  height: 57px;
  flex-shrink: 0;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #8e07fc;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 12px 0;
  cursor: pointer;

  font-weight: 700;
  line-height: 17px; /* 106.25% */
  letter-spacing: -0.48px;

  &:hover {
    background: #6e05c9;
  }
`;

// 더 추가하기 텍스트
export const AdditionalText = styled.p`
  margin-top: 33px;
  color: #9ea2b0;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 121.429% */
  letter-spacing: -0.42px;
`;
