import styled from 'styled-components';

// 전체 페이지 컨테이너
export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fafafa;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
`;

// 뒤로가기 버튼
export const BackButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 24px;
  height: 24px;
  background-image: url('/images/Back.svg');
  background-size: cover;
  cursor: pointer;
`;

// 프로필 섹션
export const ProfileSection = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin: 0 auto 16px auto;
`;

export const UserName = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const SubText = styled.p`
  font-size: 14px;
  color: #9ea2b0;
`;

// 카드 스타일
export const Card = styled.div`
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) =>
    props.hoverable &&
    `
    &:hover {
      border-color: #8e07fc;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  `}
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const CardText = styled.span`
  font-size: 16px;
  color: #312f34;
  flex: 1;
  margin-left: 16px;
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
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background: #8e07fc;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 12px 0;
  cursor: pointer;

  &:hover {
    background: #6e05c9;
  }
`;
