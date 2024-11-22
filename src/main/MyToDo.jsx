import React, { useState, useEffect } from 'react';
import * as T from './styledOurToDo'; // 기존 스타일 컴포넌트 불러오기
import { useNavigate } from 'react-router-dom'; // 페이지 이동

export function MyTasks() {
  const [currentDate, setCurrentDate] = useState(''); // 현재 날짜
  const [completedTasks, setCompletedTasks] = useState([]); // 완료된 할일 저장

  const navigate = useNavigate(); // 페이지 이동 함수

  const [tasks, setTasks] = useState({
    morning: ['길동이 아침 식사 준비'], // 오전 할일
    afternoon: ['퇴근 후 저녁 준비 시작', '세탁물 정리 및 건조'],
    userAdded: [], // 사용자 추가 할일
  });

  const [isEditMode, setIsEditMode] = useState(false); // 수정 모드 상태
  const [editingTask, setEditingTask] = useState(null); // 수정 중인 할일의 ID 저장
  const [newTask, setNewTask] = useState(''); // 새 할일 텍스트

  // 오늘 날짜 가져오기
  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${
      today.getMonth() + 1
    }월 ${today.getDate()}일`;
    setCurrentDate(formattedDate);
  }, []);

  const handleCheck = (id) => {
    setCompletedTasks((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    );
  };

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks((prev) => ({
      ...prev,
      userAdded: [...prev.userAdded, newTask],
    }));
    setNewTask('');
  };

  const deleteTask = (section, index) => {
    setTasks((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const saveTaskEdit = (section, index, value) => {
    setTasks((prev) => ({
      ...prev,
      [section]: prev[section].map((task, i) => (i === index ? value : task)),
    }));
    setEditingTask(null);
  };

  return (
    <T.PageContainer>
      <T.Header>
        <T.Date>TODAY {currentDate}</T.Date>
        <T.Profile src="https://via.placeholder.com/40" alt="Profile" />
      </T.Header>

      <T.ToggleContainer>
        <T.ToggleButton isActive={false} onClick={() => navigate('/ourtodo')}>
          <T.Icon src="/images/Person.svg" alt="우리의 할일 아이콘" />
          우리의 할일
        </T.ToggleButton>
        <T.ToggleButton isActive={true}>
          <T.Icon src="/images/OnPerson.svg" alt="나의 할일 아이콘" />
          나의 할일
        </T.ToggleButton>
      </T.ToggleContainer>

      <T.TextOur />

      <T.Section>
        <T.SectionTitle>오전</T.SectionTitle>
        {tasks.morning.map((task, index) => (
          <T.TaskItem key={`morning-${index}`}>
            <T.TaskIcon
              src={isEditMode ? '/images/Pen.svg' : '/images/OnPerson.svg'}
              alt={isEditMode ? '수정' : '아이콘'}
              onClick={() => {
                if (isEditMode) setEditingTask(`morning-${index}`);
              }}
            />
            <div style={{ flex: 1 }}>
              <T.Ment>오늘은 홍길동씨 담당</T.Ment>
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

      <T.Section>
        <T.SectionTitle>오후</T.SectionTitle>
        {tasks.afternoon.map((task, index) => (
          <T.TaskItem key={`afternoon-${index}`}>
            <T.TaskIcon
              src={isEditMode ? '/images/Pen.svg' : '/images/OnPerson.svg'}
              alt={isEditMode ? '수정' : '아이콘'}
              onClick={() => {
                if (isEditMode) setEditingTask(`afternoon-${index}`);
              }}
            />
            <div style={{ flex: 1 }}>
              <T.Ment>오늘은 홍길동씨 담당</T.Ment>
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

      {isEditMode || tasks.userAdded.length > 0 ? (
        <T.Section>
          <T.SectionTitle>내가 추가 한 나의 집안일</T.SectionTitle>
          {tasks.userAdded.map((task, index) => (
            <T.TaskItem key={`userAdded-${index}`}>
              <T.TaskIcon
                src={isEditMode ? '/images/Pen.svg' : '/images/OnPerson.svg'}
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

          {isEditMode && (
            <T.TaskItem>
              <T.TaskIcon
                src="/images/AddBox.svg"
                alt="추가"
                onClick={addTask}
              />
              <div style={{ flex: 1 }}>
                <T.Ment>나만의 집안일, 여기에 추가하고 관리해요!</T.Ment>
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

      <T.FooterBackground />
      <T.Cal onClick={() => console.log('일정 조정 클릭')} />
      {isEditMode ? (
        <T.EditOut onClick={() => setIsEditMode(false)} />
      ) : (
        <T.Add onClick={() => setIsEditMode(true)} />
      )}
      <T.Contribution onClick={() => console.log('기여도 클릭')} />
    </T.PageContainer>
  );
}

export default MyTasks;
