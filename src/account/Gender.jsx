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

  const sendGenderAndAge = async () => {
    const token = localStorage.getItem('Authorization'); // 토큰 가져오기

    if (!token) {
      alert('로그인이 필요합니다.');
      navigate('/register');
      return;
    }

    console.log('Authorization Token:', `Bearer ${token}`); // 토큰 디버깅 로그

    try {
      const requestBody = {
        gender: selectedGender,
        age: selectedAge,
      };

      console.log('Request Body:', requestBody); // 요청 데이터 디버깅 로그

      const response = await fetch('/user/additionalInfo', {
        method: 'PATCH',
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // 요청 헤더 디버깅
      console.log('Request Headers:', {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      });

      // 응답 디버깅
      console.log('Response Status:', response.status);
      console.log('Response Headers:', response.headers);

      if (!response.ok) {
        const errorResponse = await response.text();
        console.error('Server Error Response:', errorResponse); // 서버 에러 응답 디버깅
        throw new Error(`Failed to send gender and age: ${response.status}`);
      }

      console.log('Gender and age successfully sent to backend.');
      navigate(`/child`); // 성공적으로 저장되면 다음 페이지로 이동
    } catch (error) {
      console.error('Error sending gender and age:', error.message);
      alert('성별과 연령대 저장에 실패했습니다. 다시 시도해주세요.');
    }
  };

  const goChild = () => {
    if (!selectedGender || !selectedAge) {
      alert('성별과 연령대를 선택해주세요.');
      return;
    }

    console.log('Selected Gender:', selectedGender);
    console.log('Selected Age:', selectedAge);

    sendGenderAndAge(); // 선택한 값 전송
  };

  const handleGenderClick = (gender) => {
    const value = gender === '남성' ? 'MALE' : 'FEMALE';
    setSelectedGender(value);
  };

  const handleAgeClick = (age) => {
    const value = age.replace('대', ''); // "10대" -> "10"으로 변환
    setSelectedAge(value);
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
        isSelected={selectedGender === 'MALE'}
        onClick={() => handleGenderClick('남성')}
      />
      <G.Female
        isSelected={selectedGender === 'FEMALE'}
        onClick={() => handleGenderClick('여성')}
      />

      {/* 연령대 선택 버튼 */}
      <div style={{ marginTop: '490px', marginLeft: '25px' }}>
        {['10대', '20대', '30대', '40대', '50대', '기타'].map((age) => (
          <G.AgeButton
            key={age}
            isSelected={selectedAge === age.replace('대', '')}
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
