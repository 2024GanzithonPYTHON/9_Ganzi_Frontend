import React, { useState, useEffect } from 'react';
import * as CD from './styledChildDetail';

export function ChildDetail() {
  const [nickname, setNickname] = useState('');

  return (
    <CD.Container>
      {/* 프로필: 추후 닉네임 변수화 필요 */}
      <CD.ProfileImg>
        <img src="/images/ProfileImg.svg" alt="프로필 이미지" />
      </CD.ProfileImg>
      <CD.Nickname>홍길동</CD.Nickname>
      <CD.InfoText>
        <CD.HighlightText>자녀</CD.HighlightText>
        <span>에 대해 알려주세요.</span>
      </CD.InfoText>

      {/* 아이 별명 입력 */}
      <CD.LabelContainer>
        {/* 아이콘 */}
        <CD.ChildIcon />
        <CD.Label>아이의 별명으로 사용할 이름을 입력하세요.</CD.Label>
      </CD.LabelContainer>

      {/* 별명 입력란 */}
      <CD.InputContainer>
        <CD.Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="별명을 입력하세요"
        />
      </CD.InputContainer>
      {/* 등하원 기관 선택 */}

      {/* 등하원 일자 선택 */}

      {/* 등하원 시간 입력 */}

      {/* 반려동물 종 선택 */}

      {/* 반려동물 별명 입력 */}
    </CD.Container>
  );
}
export default ChildDetail;
