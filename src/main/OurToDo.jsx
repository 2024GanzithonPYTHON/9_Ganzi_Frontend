import React, { useState, useEffect } from 'react';
import * as T from './styledOurToDo'; // styled-components 불러오기
import { useNavigate } from 'react-router-dom'; // 페이지 이동
import axios from 'axios';

export function OurTasks() {
  const [currentDate, setCurrentDate] = useState(''); // 현재 날짜
  const [completedTasks, setCompletedTasks] = useState([]); // 완료된 할일 저장

  const navigate = useNavigate(); // 페이지 이동 함수

  // 할일 데이터 상태
  const [tasks, setTasks] = useState({
    morning: [],
    afternoon: [],
    userAdded: [],
  });

  const [isEditMode, setIsEditMode] = useState(false); // 수정 모드 상태
  const [editingTask, setEditingTask] = useState(null); // 수정 중인 할일의 ID 저장
  const [newTask, setNewTask] = useState(''); // 새 할일 텍스트

  // 오늘 날짜 가져오기
  useEffect(() => {
    const today = new Date(); // 오늘 날짜 가져옴
    const formattedDate = `${today.getFullYear()}년 ${
      today.getMonth() + 1
    }월 ${today.getDate()}일`; // 날짜 포맷 지정
    setCurrentDate(formattedDate);
  }, []);

  // API 데이터 가져오기
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('Authorization'); // Bearer 토큰 가져오기
      if (!token) {
        alert('로그인 토큰이 없습니다. 다시 로그인해주세요.');
        return;
      }

      const response = await axios.get(
        'https://ganzithon.hyunwoo9930.store/todo/both',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data; // API로부터 가져온 데이터
      console.log('가져온 데이터:', data);

      // 가져온 데이터를 상태로 업데이트
      setTasks({
        morning: data.morning || [],
        afternoon: data.afternoon || [],
        userAdded: data.userAdded || [],
      });
    } catch (error) {
      console.error('할일 데이터 가져오기 실패:', error);
      alert('할일 데이터를 불러오는데 실패했습니다.');
    }
  };

  // 새 할일 추가
  const addTask = async () => {
    if (newTask.trim() === '') {
      alert('할일 내용을 입력해주세요.');
      return;
    }

    try {
      const token = localStorage.getItem('Authorization');
      if (!token) {
        alert('로그인 토큰이 없습니다. 다시 로그인해주세요.');
        return;
      }

      const requestBody = {
        content: newTask,
        time: 'afternoon', // 예: 'morning' 또는 'afternoon'
        responsibility: 'shared', // 예: 'shared' 또는 특정 사용자
      };

      const response = await axios.post(
        'https://ganzithon.hyunwoo9930.store/todo/create',
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setTasks((prev) => [...prev, response.data]); // 새 할일 추가
      setNewTask(''); // 입력 필드 초기화
    } catch (error) {
      console.error('할일 추가에 실패했습니다:', error);
      alert('할일 추가에 실패했습니다.');
    }
  };

  // 페이지 로드 시 API 데이터 가져오기
  useEffect(() => {
    fetchTasks();
  }, []);

  // 완료된 할일 체크
  const handleCheck = (id) => {
    setCompletedTasks((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    );
  };

  // 할일 삭제
  const deleteTask = (section, index) => {
    setTasks((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index), // 해당 인덱스 항목 제거
    }));
  };

  // 수정 내용 저장
  const saveTaskEdit = (section, index, value) => {
    setTasks((prev) => ({
      ...prev,
      [section]: prev[section].map((task, i) => (i === index ? value : task)), // 해당 항목 수정
    }));
    setEditingTask(null); // 수정 모드 종료
  };

  return (
    <T.PageContainer>
      {/* 헤더 */}
      <T.Header>
        {/* 오늘 날짜 */}
        <T.Date>TODAY {currentDate}</T.Date>
        {/* 프로필 */}
        <T.Profile src="https://via.placeholder.com/40" alt="Profile" />
      </T.Header>

      {/* 우리의 할일 / 나의 할일 토글 버튼 */}
      <T.ToggleContainer>
        <T.ToggleButton isActive={true}>
          <T.Icon src="/images/OnPeople.svg" alt="우리의 할일 아이콘" />
          우리의 할일
        </T.ToggleButton>
        <T.ToggleButton isActive={false} onClick={() => navigate('/mytodo')}>
          <T.Icon src="/images/Person.svg" alt="나의 할일 아이콘" />
          나의 할일
        </T.ToggleButton>
      </T.ToggleContainer>

      {/* 집안일콕콕정리 */}
      <T.TextOur />

      {/* 오전 할일 섹션 */}
      <T.Section>
        <T.SectionTitle>오전</T.SectionTitle>
        {tasks.morning.map((task, index) => (
          <T.TaskItem key={`morning-${index}`}>
            {/* 수정 모드일 경우 Pen.svg, 아닐 경우 OnPeople.svg */}
            <T.TaskIcon
              src={isEditMode ? '/images/Pen.svg' : '/images/OnPeople.svg'}
              alt={isEditMode ? '수정' : '아이콘'}
              onClick={() => {
                if (isEditMode) setEditingTask(`morning-${index}`);
              }}
            />
            <div style={{ flex: 1 }}>
              <T.Ment>같이해요</T.Ment>
              {/* 수정 모드일 경우 TaskInput 표시, 그렇지 않으면 TaskText */}
              {editingTask === `morning-${index}` ? (
                <T.TaskInput
                  defaultValue={task}
                  onBlur={(e) => saveTaskEdit('morning', index, e.target.value)}
                  autoFocus
                />
              ) : (
                <T.TaskText>{task}</T.TaskText>
              )}
            </div>
            {/* 수정 모드일 경우 Trash.svg, 아닐 경우 체크박스 */}
            {isEditMode ? (
              <T.TaskIcon
                src="/images/Trash.svg"
                alt="삭제"
                onClick={() => deleteTask('morning', index)}
              />
            ) : (
              <T.CheckBox
                src={
                  completedTasks.includes(`morning-${index}`)
                    ? '/images/OnToDoCheck.svg'
                    : '/images/ToDoCheck.svg'
                }
                onClick={() => handleCheck(`morning-${index}`)}
              />
            )}
          </T.TaskItem>
        ))}
      </T.Section>

      {/* 오후 할일 섹션 */}
      <T.Section>
        <T.SectionTitle>오후</T.SectionTitle>
        {tasks.afternoon.map((task, index) => (
          <T.TaskItem key={`afternoon-${index}`}>
            {/* 수정 모드일 경우 Pen.svg, 아닐 경우 OnPeople.svg */}
            <T.TaskIcon
              src={isEditMode ? '/images/Pen.svg' : '/images/OnPeople.svg'}
              alt={isEditMode ? '수정' : '아이콘'}
              onClick={() => {
                if (isEditMode) setEditingTask(`afternoon-${index}`);
              }}
            />
            <div style={{ flex: 1 }}>
              <T.Ment>같이해요</T.Ment>
              {/* 수정 모드일 경우 TaskInput 표시, 그렇지 않으면 TaskText */}
              {editingTask === `afternoon-${index}` ? (
                <T.TaskInput
                  defaultValue={task}
                  onBlur={(e) =>
                    saveTaskEdit('afternoon', index, e.target.value)
                  }
                  autoFocus
                />
              ) : (
                <T.TaskText>{task}</T.TaskText>
              )}
            </div>
            {/* 수정 모드일 경우 Trash.svg, 아닐 경우 체크박스 */}
            {isEditMode ? (
              <T.TaskIcon
                src="/images/Trash.svg"
                alt="삭제"
                onClick={() => deleteTask('afternoon', index)}
              />
            ) : (
              <T.CheckBox
                src={
                  completedTasks.includes(`afternoon-${index}`)
                    ? '/images/OnToDoCheck.svg'
                    : '/images/ToDoCheck.svg'
                }
                onClick={() => handleCheck(`afternoon-${index}`)}
              />
            )}
          </T.TaskItem>
        ))}
      </T.Section>

      {/* 사용자 추가 항목 섹션 */}
      {isEditMode || tasks.userAdded.length > 0 ? (
        <T.Section>
          <T.SectionTitle>홍길동님이 추가한 우리의 할일</T.SectionTitle>
          {tasks.userAdded.map((task, index) => (
            <T.TaskItem key={`userAdded-${index}`}>
              <T.TaskIcon
                src={isEditMode ? '/images/Pen.svg' : '/images/OnPeople.svg'}
                alt={isEditMode ? '수정' : '아이콘'}
                onClick={() => {
                  if (isEditMode) setEditingTask(`userAdded-${index}`);
                }}
              />
              <div style={{ flex: 1 }}>
                <T.Ment>직접 추가했어요</T.Ment>
                <T.TaskText>{task}</T.TaskText>
              </div>
              {isEditMode ? (
                <T.TaskIcon
                  src="/images/Trash.svg"
                  alt="삭제"
                  onClick={() => deleteTask('userAdded', index)}
                />
              ) : (
                <T.CheckBox
                  src={
                    completedTasks.includes(`userAdded-${index}`)
                      ? '/images/OnToDoCheck.svg'
                      : '/images/ToDoCheck.svg'
                  }
                  onClick={() => handleCheck(`userAdded-${index}`)}
                />
              )}
            </T.TaskItem>
          ))}

          {/* 새 할일 추가 */}
          {isEditMode && (
            <T.TaskItem>
              <T.TaskIcon
                src="/images/AddBox.svg"
                alt="추가"
                onClick={addTask}
              />
              <div style={{ flex: 1 }}>
                <T.Ment>우리의 집안일, 여기에 추가하고 관리해요!</T.Ment>
                <T.TaskInput
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="집안일 추가하기"
                />
              </div>
            </T.TaskItem>
          )}
        </T.Section>
      ) : null}

      {/* 페이지 하단 푸터 */}
      <T.FooterBackground />
      {/* 일정 조정 버튼 */}
      <T.Cal onClick={() => console.log('일정 조정 클릭')} />
      {/* 할일 추가 버튼 - 관리 모드에 따라 아이콘 변경 */}
      {isEditMode ? (
        <T.EditOut onClick={() => setIsEditMode(false)} />
      ) : (
        <T.Add onClick={() => setIsEditMode(true)} />
      )}
      {/* 기여도 버튼 */}
      <T.Contribution onClick={() => console.log('기여도 클릭')} />
    </T.PageContainer>
  );
}

export default OurTasks;
