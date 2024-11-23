import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as T from './styledInfoInput';

export function InfoInput() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [workData, setWorkData] = useState(null); // 출근 시간 저장
  const [childData, setChildData] = useState(null); // 자녀 정보 저장
  const [petData, setPetData] = useState(null); // 반려동물 정보 저장

  // 프로필 정보 로드
  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    const storedProfileImage = localStorage.getItem('profileImage');

    if (!storedNickname || !storedProfileImage) {
      alert('프로필 정보를 가져오지 못했습니다. 다시 로그인해주세요.');
      navigate('/register');
    } else {
      setNickname(storedNickname);
      setProfileImage(storedProfileImage);
    }
  }, [navigate]);

  // 기입된 정보 로드
  useEffect(() => {
    const savedWorkData = localStorage.getItem('workData');
    const savedChildData = localStorage.getItem('childData');
    const savedPetData = localStorage.getItem('petData');

    if (savedWorkData) setWorkData(JSON.parse(savedWorkData));
    if (savedChildData) setChildData(JSON.parse(savedChildData));
    if (savedPetData) setPetData(JSON.parse(savedPetData));
  }, []);

  return (
    <T.PageContainer>
      {/* 뒤로가기 버튼 */}
      <T.BackButton onClick={() => navigate(-1)} />

      {/* 프로필 섹션 */}
      <T.ProfileSection>
        <T.ProfileImg>
          <img src={profileImage} alt={`${nickname}'s profile`} />
        </T.ProfileImg>
        <div style={{ marginRight: '20px' }}>
          <T.UserName>{nickname}</T.UserName>
          <T.SubText>
            집콕콕을 더욱 똑똑하게! <br />
            간단한 정보를 입력해주세요
          </T.SubText>
        </div>
      </T.ProfileSection>

      {/* 중간 정보 카드 */}
      <T.CardContainer>
        {/* 출근 시간 */}
        {workData ? (
          <T.WorkCardSaved>
            <T.Icon src="/images/IISchedule.svg" alt="출퇴근 아이콘" />
            <T.SavedText>출퇴근 시간이 저장되었습니다!</T.SavedText>
            <T.CheckIcon src="/images/Check.svg" alt="체크 아이콘" />
          </T.WorkCardSaved>
        ) : (
          <T.WorkCard onClick={() => navigate('/workdetail')}>
            <T.Icon src="/images/IISchedule.svg" alt="출퇴근 아이콘" />
            <T.CardText>내 출퇴근 시간 추가하기</T.CardText>
            <T.PlusIcon src="/images/IIPlus.svg" alt="플러스 아이콘" />
          </T.WorkCard>
        )}

        <T.FlexRow>
          {/* 자녀 정보 */}
          <T.ChildCard
            onClick={() => navigate('/addchild')}
            hoverable
            style={{
              color: childData ? 'purple' : 'gray',
              borderColor: childData ? 'purple' : 'gray',
            }}
          >
            <T.Icon src="/images/ChildIcon.svg" alt="자녀 아이콘" />
            <T.CardText>{childData ? childData.nickname : '자녀'}</T.CardText>
            <T.PlusIcon
              src={childData ? '/images/Addcheck.svg' : '/images/IIPlus.svg'}
              alt="자녀 추가"
            />
          </T.ChildCard>

          {/* 반려동물 정보 */}
          <T.ChildCard
            onClick={() => navigate('/addpet')}
            hoverable
            style={{
              color: petData ? 'purple' : 'gray',
              borderColor: petData ? 'purple' : 'gray',
            }}
          >
            <T.Icon src="/images/PetIcon.svg" alt="반려동물 아이콘" />
            <T.CardText>{petData ? petData.nickname : '반려동물'}</T.CardText>
            <T.PlusIcon
              src={petData ? '/images/Addcheck.svg' : '/images/IIPlus.svg'}
              alt="반려동물 추가"
            />
          </T.ChildCard>
        </T.FlexRow>
      </T.CardContainer>

      {/* 하단 버튼 */}
      <T.BottomButton onClick={() => alert('완료')}>
        똑똑해진 집콕콕과 함께 시작해볼까요?
      </T.BottomButton>
    </T.PageContainer>
  );
}

export default InfoInput;
