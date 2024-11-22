import React from 'react';
import * as T from './styledInfoInput'; // 스타일 컴포넌트 파일 불러오기
import { useNavigate } from 'react-router-dom'; // 페이지 이동

export default function InfoInput() {
  const navigate = useNavigate();

  return (
    <T.PageContainer>
      {/* 뒤로가기 버튼 */}
      <T.BackButton onClick={() => navigate(-1)} />

      {/* 프로필 섹션 */}
      <T.ProfileSection>
        <T.ProfileImage />
        <T.UserName>홍길동</T.UserName>
        <T.SubText>
          집콕콕을 더욱 똑똑하게! 간단한 정보를 입력해주세요
        </T.SubText>
      </T.ProfileSection>

      {/* 출퇴근 시간 추가 섹션 */}
      <T.Card onClick={() => navigate('/addworktime')} hoverable>
        <T.Icon src="/images/Cal.svg" alt="출퇴근 시간 아이콘" />
        <T.CardText>내 출퇴근 시간 추가하기</T.CardText>
        <T.PlusIcon src="/images/Plus.svg" alt="플러스 아이콘" />
      </T.Card>

      {/* 자녀 추가 섹션 */}
      <T.FlexRow>
        <T.Card onClick={() => navigate('/addchildren')} hoverable>
          <T.Icon src="/images/Child.svg" alt="자녀 아이콘" />
          <T.CardText>자녀</T.CardText>
          <T.PlusIcon src="/images/Plus.svg" alt="플러스 아이콘" />
        </T.Card>

        {/* 반려동물 추가 섹션 */}
        <T.Card onClick={() => navigate('/addpets')} hoverable>
          <T.Icon src="/images/Pet.svg" alt="반려동물 아이콘" />
          <T.CardText>반려동물</T.CardText>
          <T.PlusIcon src="/images/Plus.svg" alt="플러스 아이콘" />
        </T.Card>
      </T.FlexRow>

      {/* 하단 버튼 */}
      <T.BottomButton>똑똑해진 집콕콕과 함께 시작해볼까요?</T.BottomButton>
    </T.PageContainer>
  );
}
