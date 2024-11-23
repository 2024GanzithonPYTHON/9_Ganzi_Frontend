import React, { useState, useEffect } from 'react'; // useState 추가
import { useNavigate, useLocation } from 'react-router-dom';
import * as T from './styledInfoInput';
import axios from 'axios';

export default function InfoInput() {
  const navigate = useNavigate();
  const location = useLocation();

  const [nickname, setNickname] = useState('');
  const [profileImage, setProfileImage] = useState('');

  // 직장 추가 상태 관리
  const [isWorkSaved, setIsWorkSaved] = useState(false); // 직장 정보 저장 여부
  const [childData, setChildData] = useState(null); // 자녀 정보 상태
  const [savedPets, setSavedPets] = useState([]); // 저장된 반려동물 정보

  // localStorage에서 닉네임과 프로필 이미지 가져오기
  useEffect(() => {
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

  // 직장 정보 상태 업데이트
  useEffect(() => {
    if (location.state?.workData) {
      setIsWorkSaved(true); // 직장 정보가 저장되었음을 표시
    }
  }, [location.state]);

  // 자녀 정보 업데이트
  useEffect(() => {
    if (location.state?.childData) {
      setChildData(location.state.childData[0]); // 첫 번째 자녀 정보로 설정
    }
  }, [location.state]);

  // 반려동물 정보 업데이트
  useEffect(() => {
    if (location.state?.petData) {
      setSavedPets((prev) => [...prev, location.state.petData]);
    }
  }, [location.state]);

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

      {/* 출퇴근 시간 추가 섹션 */}
      {isWorkSaved ? (
        // 저장된 상태일 때 표시
        <T.WorkCardSaved>
          <T.Icon src="/images/IISchedule.svg" alt="출퇴근 시간 아이콘" />
          <T.SavedText>출퇴근 시간이 저장되었습니다!</T.SavedText>
          <T.CheckIcon src="/images/Check.svg" alt="체크 아이콘" />
        </T.WorkCardSaved>
      ) : (
        // 저장되지 않은 상태일 때 표시
        <T.WorkCard
          onClick={() => {
            setIsWorkSaved(true); // 상태 업데이트
            navigate('/workdetail'); // 경로 이동
          }}
          $hoverable={true}
        >
          <T.Icon src="/images/IISchedule.svg" alt="출퇴근 시간 아이콘" />
          <T.CardText>내 출퇴근 시간 추가하기</T.CardText>
          <T.PlusIcon src="/images/IIPlus.svg" alt="플러스 아이콘" />
        </T.WorkCard>
      )}

      <T.CardContainer>
        {/* 자녀 추가 섹션 */}
        <T.FlexRow>
          <T.ChildCard
            onClick={() => navigate('/addchild')}
            hoverable
            style={{
              color: childData ? 'purple' : 'gray',
              borderColor: childData ? 'purple' : 'gray',
            }}
          >
            <T.Icon src="/images/ChildIcon.svg" alt="자녀 아이콘" />
            <T.CardText>자녀</T.CardText>
            <T.PlusIcon src="/images/IIPlus.svg" alt="플러스 아이콘" />
          </T.ChildCard>

          {/* 반려동물 추가 섹션 */}
          <T.ChildCard onClick={() => navigate('/addpet')} hoverable>
            <T.Icon src="/images/PetIcon.svg" alt="반려동물 아이콘" />
            <T.CardText>반려동물</T.CardText>
            <T.PlusIcon src="/images/IIPlus.svg" alt="플러스 아이콘" />
          </T.ChildCard>
        </T.FlexRow>
      </T.CardContainer>

      {/* 추가 */}
      <T.CardContainer>
        {/* 자녀 추가 섹션 */}
        <T.FlexRow>
          <div>
            <T.AdditionalText>자녀 추가하기</T.AdditionalText>
            <T.ChildCard onClick={() => navigate('/addchildren')} hoverable>
              <T.Icon src="/images/ChildIcon.svg" alt="자녀 아이콘" />
              <T.CardText>자녀</T.CardText>
              <T.PlusIcon src="/images/IIPlus.svg" alt="플러스 아이콘" />
            </T.ChildCard>
          </div>

          {/* 반려동물 추가 섹션 */}
          <div>
            <T.AdditionalText>반려동물 추가하기</T.AdditionalText>
            <T.ChildCard onClick={() => navigate('/addpet')} hoverable>
              <T.Icon src="/images/PetIcon.svg" alt="반려동물 아이콘" />
              <T.CardText>반려동물</T.CardText>
              <T.PlusIcon src="/images/IIPlus.svg" alt="플러스 아이콘" />
            </T.ChildCard>
          </div>
        </T.FlexRow>
      </T.CardContainer>
      {/* 하단 버튼 */}
      <T.BottomButton onClick={() => navigate('/nomember')}>
        똑똑해진 집콕콕과 함께 시작해볼까요?
      </T.BottomButton>
    </T.PageContainer>
  );
}
