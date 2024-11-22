import React, { useState } from 'react';
import * as T from './styledTest'; // styled-components 불러오기

const OurTasks = () => {
  const [tasks, setTasks] = useState({
    morning: ['길동이 등교 준비'],
    afternoon: [
      '저녁 준비 및 길동이 저녁 식사 챙기기',
      '식사 후 주방 정리 및 설거지',
      '동이 산책',
    ],
    userAdded: [],
  });

  const [isEditMode, setIsEditMode] = useState(false); // 수정 모드 상태
  const [editingTask, setEditingTask] = useState(null); // 수정 중인 할일 식별
  const [newTask, setNewTask] = useState(''); // 새 할일 텍스트

  // 새 할일 추가
  const addTask = () => {
    if (newTask.trim() === '') return; // 빈 값 방지
    setTasks((prev) => ({
      ...prev,
      userAdded: [...prev.userAdded, newTask], // 사용자 추가 항목에 새 항목 추가
    }));
    setNewTask(''); // 입력 필드 초기화
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
        <T.Title>오늘의 할일</T.Title>
        <T.Tabs>
          <T.TabButton active>우리의 할일</T.TabButton>
          <T.TabButton>나의 할일</T.TabButton>
        </T.Tabs>
      </T.Header>

      {/* 오전 할일 섹션 */}
      <T.Section>
        <T.SectionTitle>오전</T.SectionTitle>
        {tasks.morning.map((task, index) => (
          <T.TaskItem key={index}>
            {editingTask === `morning-${index}` ? (
              <T.TaskInput
                defaultValue={task}
                onBlur={(e) => saveTaskEdit('morning', index, e.target.value)}
                autoFocus
              />
            ) : (
              <T.TaskText>{task}</T.TaskText>
            )}
            {isEditMode && (
              <>
                <T.TaskIcon
                  src="images/Pen.svg"
                  alt="수정"
                  onClick={() => setEditingTask(`morning-${index}`)}
                />
                <T.TaskIcon
                  src="images/Trash.svg"
                  alt="삭제"
                  onClick={() => deleteTask('morning', index)}
                />
              </>
            )}
          </T.TaskItem>
        ))}
      </T.Section>

      {/* 오후 할일 섹션 */}
      <T.Section>
        <T.SectionTitle>오후</T.SectionTitle>
        {tasks.afternoon.map((task, index) => (
          <T.TaskItem key={index}>
            {editingTask === `afternoon-${index}` ? (
              <T.TaskInput
                defaultValue={task}
                onBlur={(e) => saveTaskEdit('afternoon', index, e.target.value)}
                autoFocus
              />
            ) : (
              <T.TaskText>{task}</T.TaskText>
            )}
            {isEditMode && (
              <>
                <T.TaskIcon
                  src="images/Pen.svg"
                  alt="수정"
                  onClick={() => setEditingTask(`afternoon-${index}`)}
                />
                <T.TaskIcon
                  src="images/Trash.svg"
                  alt="삭제"
                  onClick={() => deleteTask('afternoon', index)}
                />
              </>
            )}
          </T.TaskItem>
        ))}
      </T.Section>

      {/* 사용자 추가 항목 */}
      <T.AddTaskSection>
        <T.SectionTitle>홍길동님이 추가한 우리의 할일</T.SectionTitle>
        {tasks.userAdded.map((task, index) => (
          <T.TaskItem key={index}>
            {editingTask === `userAdded-${index}` ? (
              <T.TaskInput
                defaultValue={task}
                onBlur={(e) => saveTaskEdit('userAdded', index, e.target.value)}
                autoFocus
              />
            ) : (
              <T.TaskText>{task}</T.TaskText>
            )}
            {isEditMode && (
              <>
                <T.TaskIcon
                  src="images/Pen.svg"
                  alt="수정"
                  onClick={() => setEditingTask(`userAdded-${index}`)}
                />
                <T.TaskIcon
                  src="images/Trash.svg"
                  alt="삭제"
                  onClick={() => deleteTask('userAdded', index)}
                />
              </>
            )}
          </T.TaskItem>
        ))}

        {/* 새 할일 추가 */}
        {isEditMode && (
          <div
            style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}
          >
            <T.AddTaskInput
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="새 할일 입력"
            />
            <T.TaskIcon
              src="images/AddBox.svg" // 추가 버튼
              alt="추가"
              onClick={addTask}
            />
          </div>
        )}
      </T.AddTaskSection>

      {/* 수정 모드 토글 */}
      <footer>
        <T.FooterButton
          edit={isEditMode}
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {isEditMode ? '수정 완료' : '집안일 관리'}
        </T.FooterButton>
      </footer>
    </T.PageContainer>
  );
};

export default OurTasks;
