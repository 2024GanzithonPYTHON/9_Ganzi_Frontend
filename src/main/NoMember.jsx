import React, { useState, useEffect } from 'react';
import * as N from './styledNoMember';
import { useNavigate } from 'react-router-dom';

export function NoMember() {
  const [currentDate, setCurrentDate] = useState(''); // 현재 날짜
  const [isOurTodo, setIsOurTodo] = useState(true); // 현재 탭 상태 (우리/나)
  const navigate = useNavigate();

  // 오늘 날짜 가져오기
  useEffect(() => {
    const today = new Date(); // 오늘 날짜 가져옴
    const formattedDate = `${today.getFullYear()}년 ${
      today.getMonth() + 1
    }월 ${today.getDate()}일`; // 날짜 포맷 지정
    setCurrentDate(formattedDate);
  }, []);

  return (
    <N.Container>
      {/* 헤더 */}
      <N.Header>
        {/* 오늘 날짜 */}
        <N.Date>TODAY {currentDate}</N.Date>
        {/* 프로필 */}
        <N.Profile src="https://via.placeholder.com/40" alt="Profile" />
      </N.Header>

      {/* 우리의 할일 / 나의 할일 토글 버튼 */}
      <N.ToggleContainer>
        {/* 우리의 할일 버튼 */}
        <N.ToggleButton isActive={isOurTodo} onClick={() => setIsOurTodo(true)}>
          <N.Icon
            src={isOurTodo ? '/images/OnPeople.svg' : '/images/People.svg'}
            alt="우리의 할일 아이콘"
          />
          우리의 할일
        </N.ToggleButton>

        {/* 나의 할일 버튼 */}
        <N.ToggleButton
          isActive={!isOurTodo}
          onClick={() => setIsOurTodo(false)}
        >
          <N.Icon
            src={isOurTodo ? '/images/Person.svg' : '/images/OnPerson.svg'}
            alt="나의 할일 아이콘"
          />
          나의 할일
        </N.ToggleButton>
      </N.ToggleContainer>

      {/* 초대 문구 */}
      <N.InviteMessage1>함께할 멤버가 아직 없어요</N.InviteMessage1>
      <N.InviteMessage2>
        멤버를 초대하거나 집콕콕에 참여해서 함께해보세요!
      </N.InviteMessage2>

      {/* 멤버 초대/참여 버튼 */}
      <N.InviteButton onClick={() => navigate('/addmember')}>
        집콕콕 멤버초대 / 집콕콕 참여
      </N.InviteButton>

      {/* 페이지 하단 푸터 */}
      {/* 푸터 배경 */}
      <N.FooterBackground />

      {/* 일정 조정 버튼 */}
      <N.Cal onClick={() => console.log('일정 조정 클릭')} />

      {/* 할일 추가 버튼 */}
      <N.Add onClick={() => console.log('할일 추가 클릭')} />

      {/* 기여도 버튼 */}
      <N.Contribution onClick={() => console.log('기여도 클릭')} />
    </N.Container>
  );
}

export default NoMember;
