import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as G from './styledGender';

export function Gender() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);

  useEffect(() => {
    // localStorage에서 닉네임과 프로필 이미지 가져오기
    const storedNickname = localStorage.getItem('nickname');
    const storedProfileImage = localStorage.getItem('profileImage');

    if (!storedNickname || !storedProfileImage) {
      console.error(
        'Profile information is missing. Redirecting to login page...'
      );
      alert('프로필 정보를 가져오지 못했습니다. 다시 로그인해주세요.');
      navigate('/register'); // 로그인 페이지로 리다이렉트
    } else {
      setNickname(storedNickname);
      setProfileImage(storedProfileImage);
      console.log('Profile loaded:', {
        nickname: storedNickname,
        image: storedProfileImage,
      });
    }
  }, [navigate]);

  const goChild = () => {
    if (!selectedGender || !selectedAge) {
      alert('성별과 연령대를 선택해주세요.');
      return;
    }

    console.log('Selected Gender:', selectedGender);
    console.log('Selected Age:', selectedAge);

    navigate(`/child`);
  };

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const handleAgeClick = (age) => {
    setSelectedAge(age);
  };

  return (
    <G.Container>
      <G.ProfileImg>
        <img src={profileImage} alt={`${nickname}'s profile`} />
      </G.ProfileImg>
      <G.Nickname>{nickname}</G.Nickname>
      <G.InfoText>
        <G.HighlightText>성별, </G.HighlightText>
        <G.HighlightText>연령대</G.HighlightText>
        <span>를 선택해주세요.</span>
      </G.InfoText>

      {/* 성별 아이콘 버튼 */}
      <G.Male
        isSelected={selectedGender === '남성'}
        onClick={() => handleGenderClick('남성')}
      />
      <G.Female
        isSelected={selectedGender === '여성'}
        onClick={() => handleGenderClick('여성')}
      />

      {/* 연령대 선택 버튼 */}
      <div style={{ marginTop: '490px', marginLeft: '25px' }}>
        {['10대', '20대', '30대', '40대', '50대', '기타'].map((age) => (
          <G.AgeButton
            key={age}
            isSelected={selectedAge === age}
            onClick={() => handleAgeClick(age)}
          >
            {age}
          </G.AgeButton>
        ))}
      </div>

      {/* 다음 버튼 */}
      <G.NextBtn onClick={goChild} />
    </G.Container>
  );
}

export default Gender;
