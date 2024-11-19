import React, { useState, useEffect } from 'react';
import * as T from './styledOurToDo';
import { useNavigate } from 'react-router-dom'; // 페이지 이동

export function OurToDo() {
  const [currentDate, setCurrentDate] = useState(''); // 현재 날짜
  const [toDos, setToDos] = useState([]); // 할일 데이터
  const [completedTasks, setCompletedTasks] = useState([]); // 완료된 할일 저장

  const navigate = useNavigate(); // 페이지 이동 함수

  // 오늘 날짜 가져오기
  useEffect(() => {
    const today = new Date(); // 오늘 날짜 가져옴
    const formattedDate = `${today.getFullYear()}년 ${
      today.getMonth() + 1
    }월 ${today.getDate()}일`; // 날짜 포맷 지정
    setCurrentDate(formattedDate);
  }, []);

  // 할일 데이터 설정
  useEffect(() => {
    setToDos([
      {
        id: 1,
        timeOfDay: 'morning',
        taskName: '길동이 등교 준비',
        type: 'our',
      },

      {
        id: 3,
        timeOfDay: 'afternoon',
        taskName: '저녁 준비 및 길동이 저녁 식사 챙기기',
        type: 'our',
      },

      {
        id: 5,
        timeOfDay: 'afternoon',
        taskName: '식사 후 주방 정리 및 설거지',
        type: 'our',
      },
    ]);
  }, []);

  // 오전과 오후 데이터 나누기
  const morningToDos = toDos.filter((toDo) => toDo.timeOfDay === 'morning');
  const afternoonToDos = toDos.filter((toDo) => toDo.timeOfDay === 'afternoon');

  // 완료된 할일 체크
  const handleCheck = (id) => {
    if (completedTasks.includes(id)) {
      setCompletedTasks(completedTasks.filter((taskId) => taskId !== id));
    } else {
      setCompletedTasks([...completedTasks, id]);
    }
  };

  return (
    <T.Container>
      {/* 헤더 */}
      <T.Header>
        {/* 오늘 날짜 */}
        <T.Date>TODAY {currentDate}</T.Date>
        {/* 프로필 */}
        <T.Profile src="https://via.placeholder.com/40" alt="Profile" />
      </T.Header>
      {/* 우리의 할일 / 나의 할일 토글 버튼 */}
      <T.ToggleContainer>
        {/* 우리의 할일 버튼 */}
        <T.ToggleButton isActive={true}>
          <T.Icon src="/images/OnPeople.svg" alt="우리의 할일 아이콘" />
          우리의 할일
        </T.ToggleButton>

        {/* 나의 할일 버튼 */}
        <T.ToggleButton isActive={false} onClick={() => navigate('/mytodo')}>
          <T.Icon src="/images/Person.svg" alt="나의 할일 아이콘" />
          나의 할일
        </T.ToggleButton>
      </T.ToggleContainer>

      {/* 멘트(집안일콕콕정리 / 우리의할일) */}
      <T.TextOur />
      {/* 할일 리스트 */}
      <T.ToDoSection>
        {/* 오전 */}
        <T.TimeLabel>오전</T.TimeLabel>
        {morningToDos.map((toDo) => (
          <T.ToDoBox key={toDo.id}>
            <T.ToDoIcon src="/images/OnPeople.svg" alt="할일 아이콘" />
            <T.ToDoTexts>
              <T.Ment>같이해요</T.Ment>
              <T.TaskName>{toDo.taskName}</T.TaskName>
            </T.ToDoTexts>
            <T.CheckBox
              src={
                completedTasks.includes(toDo.id)
                  ? '/images/OnToDoCheck.svg'
                  : '/images/ToDoCheck.svg'
              }
              onClick={() => handleCheck(toDo.id)}
            />
          </T.ToDoBox>
        ))}

        {/* 오후 */}
        <T.TimeLabel>오후</T.TimeLabel>
        {afternoonToDos.map((toDo) => (
          <T.ToDoBox key={toDo.id}>
            <T.ToDoIcon src="/images/OnPeople.svg" alt="할일 아이콘" />
            <T.ToDoTexts>
              <T.Ment>같이해요</T.Ment>
              <T.TaskName>{toDo.taskName}</T.TaskName>
            </T.ToDoTexts>
            <T.CheckBox
              src={
                completedTasks.includes(toDo.id)
                  ? '/images/OnToDoCheck.svg'
                  : '/images/ToDoCheck.svg'
              }
              onClick={() => handleCheck(toDo.id)}
            />
          </T.ToDoBox>
        ))}
      </T.ToDoSection>
      {/* 페이지 하단 푸터 */}
      {/* 푸터 배경 */}
      <T.FooterBackground />
      {/* 일정 조정 버튼 */}
      <T.Cal onClick={() => console.log('일정 조정 클릭')} />
      {/* 할일 추가 버튼 */}
      <T.Add onClick={() => console.log('할일 추가 클릭')} />
      {/* 기여도 버튼 */}
      <T.Contribution onClick={() => console.log('기여도 클릭')} />
    </T.Container>
  );
}

export default OurToDo;
