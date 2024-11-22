import React, { useState, useEffect } from 'react';
import * as CD from './styledAddChild';
import * as WD from './styledWorkDetail';
import { useNavigate } from 'react-router-dom';

export default function AddPet() {
  const [species, setSpecies] = useState(''); // 반려동물 종
  const [petNickname, setPetNickname] = useState(''); // 반려동물 별명
  const navigate = useNavigate();

  // 반려동물 종 선택
  const handleSpecies = (newSpecies) => {
    setSpecies(newSpecies); // 선택된 종 상태 업데이트
  };

  // 반려동물 정보 저장 및 InfoInput으로 이동
  const handleSavePet = async () => {
    if (!species || !petNickname) {
      alert('반려동물의 종과 별명을 입력해주세요.');
      return;
    }

    const petData = {
      type: species, // 반려동물 종
      nickname: petNickname, // 반려동물 별명
    };

    try {
      const response = await fetch(
        'https://ganzithon.hyunwoo9930.store/pet/create',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(petData),
        }
      );

      if (response.ok) {
        const savedPet = await response.json();
        navigate('/infoinput', { state: { petData: savedPet } }); // 저장된 데이터를 전달하며 이동
      } else {
        const error = await response.json();
        alert(`저장 실패: ${error.message || '서버 오류'}`);
      }
    } catch (error) {
      alert(`저장 실패: ${error.message || '네트워크 오류'}`);
    }
  };

  return (
    <CD.Container>
      <WD.ProfileSection>
        <WD.ProfileImg>
          <img src="/images/ProfileImg.svg" alt="프로필 이미지" />
        </WD.ProfileImg>
        <WD.Nickname>홍길동</WD.Nickname>
      </WD.ProfileSection>
      <WD.InfoText>
        <span>우리 </span>
        <WD.HighlightText>가족에 대한 정보</WD.HighlightText>
        <span>
          를 알려주시면,
          <br />더 똑똑한 분담 계획을 세울 수 있어요!
        </span>
      </WD.InfoText>

      {/* 반려동물 종 선택 */}
      <CD.LabelContainer style={{ marginTop: '44px' }}>
        {/* 아이콘 */}
        <CD.Icon icon="/images/OnPetIcon.svg" />
        <CD.Label>반려동물은 어떤 동물인가요?</CD.Label>
      </CD.LabelContainer>
      <CD.ChoiceContainer style={{ marginLeft: '3px' }}>
        {['강아지', '고양이', '그 외'].map((speciesOption) => (
          <CD.ChoiceButton
            key={speciesOption}
            selected={species === speciesOption}
            onClick={() => handleSpecies(speciesOption)}
          >
            {speciesOption}
          </CD.ChoiceButton>
        ))}
      </CD.ChoiceContainer>

      {/* 반려동물 별명 입력 */}
      <CD.LabelContainer>
        {/* 아이콘 */}
        <CD.Icon icon="/images/OnPetIcon.svg" />
        <CD.Label>반려동물의 별명으로 사용할 이름을 입력하세요.</CD.Label>
      </CD.LabelContainer>
      {/* 별명 입력란 */}
      <CD.InputContainer>
        <CD.Input
          type="text"
          value={petNickname}
          onChange={(e) => setPetNickname(e.target.value)}
          placeholder="별명을 입력하세요"
        />
      </CD.InputContainer>

      {/* 하단 버튼 */}
      <WD.OkButton onClick={handleSavePet}>확인</WD.OkButton>
    </CD.Container>
  );
}
