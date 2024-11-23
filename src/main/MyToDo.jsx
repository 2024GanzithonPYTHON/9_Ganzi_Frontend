import React, { useState, useEffect } from 'react';
import * as T from './styledOurToDo'; // styled-components 불러오기
import { useNavigate } from 'react-router-dom'; // 페이지 이동
import axios from 'axios';

export function OurTasks() {
  const [currentDate, setCurrentDate] = useState(''); // 현재 날짜
  const [completedTasks, setCompletedTasks] = useState([]); // 완료된 할일 저장
  const [nickname, setNickname] = useState(''); // 닉네임 가져오기
  const navigate = useNavigate(); // 페이지 이동 함수

  // 프로필 정보 로드
  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');

    if (!storedNickname) {
      alert('프로필 정보를 가져오지 못했습니다. 다시 로그인해주세요.');
      navigate('/register');
    } else {
      setNickname(storedNickname);
    }
  }, [navigate]);

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
        navigate('/login'); // 로그인 페이지로 이동
        return;
      }

      const response = await axios.get(
        'https://ganzithon.hyunwoo9930.store/todo/my',
        {
          headers: {
            Authorization: ` ${token}`,
          },
        }
      );

      const data = response.data; // API로부터 가져온 데이터
      console.log('가져온 데이터:', data);

      // 오전(00:00 ~ 11:59)과 오후(12:00 ~ 23:59)로 분류
      const morningTasks = data.filter((task) => {
        const taskHour = new Date(task.time).getHours(); // `time`에서 시간(HH)을 추출
        return taskHour >= 0 && taskHour < 12; // 오전
      });

      const afternoonTasks = data.filter((task) => {
        const taskHour = new Date(task.time).getHours(); // `time`에서 시간(HH)을 추출
        return taskHour >= 12 && taskHour <= 23; // 오후
      });

      // 상태 업데이트
      setTasks({
        morning: morningTasks,
        afternoon: afternoonTasks,
        userAdded: [], // 사용자 추가 데이터 처리
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
        time: new Date().toISOString(), // 현재 시간 (예: 오후 할일에 추가하려면 수정 가능)
        responsibility: 'MY', // 기본 책임자 설정
      };

      const response = await axios.post(
        'https://ganzithon.hyunwoo9930.store/todo/create',
        requestBody,
        {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data === 'success') {
        // 새로운 할일을 userAdded 배열에 추가
        setTasks((prev) => ({
          ...prev,
          userAdded: [...prev.userAdded, requestBody],
        }));
        setNewTask(''); // 입력 필드 초기화
      } else {
        alert('할일 추가에 실패했습니다.');
      }
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
  const handleCheck = async (id) => {
    try {
      const token = localStorage.getItem('Authorization');
      if (!token) {
        alert('로그인 토큰이 없습니다. 다시 로그인해주세요.');
        return;
      }

      // PATCH 요청으로 완료 상태 업데이트
      const response = await axios.patch(
        `https://ganzithon.hyunwoo9930.store/todo/complete/${id}`,
        id, // 요청 바디에 ID 전달
        {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        // 성공 시 완료 상태 업데이트
        setCompletedTasks((prev) =>
          prev.includes(id)
            ? prev.filter((taskId) => taskId !== id)
            : [...prev, id]
        );
      } else {
        alert('할일 완료 업데이트에 실패했습니다.');
      }
    } catch (error) {
      console.error('할일 완료 업데이트 실패:', error);
      alert('할일 완료 업데이트에 실패했습니다.');
    }
  };

  // 할일 삭제
  const deleteTask = async (id, section) => {
    try {
      const token = localStorage.getItem('Authorization');
      if (!token) {
        alert('로그인 토큰이 없습니다. 다시 로그인해주세요.');
        return;
      }

      // DELETE 요청으로 할일 삭제
      const response = await axios.delete(
        `https://ganzithon.hyunwoo9930.store/todo/delete/${id}`,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (response.status === 200) {
        // 성공적으로 삭제된 경우 상태 업데이트
        setTasks((prev) => ({
          ...prev,
          [section]: prev[section].filter((task) => task.id !== id), // 해당 ID를 제외한 나머지 유지
        }));
        alert('할일이 성공적으로 삭제되었습니다.');
      } else {
        alert('할일 삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('할일 삭제 실패:', error);
      alert('할일 삭제에 실패했습니다.');
    }
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
      <T.Content>
        {/* 헤더 */}
        <T.Header>
          {/* 오늘 날짜 */}
          <T.Date>TODAY {currentDate}</T.Date>
          {/* 프로필 */}
          <T.Profile src="https://via.placeholder.com/40" alt="Profile" />
        </T.Header>

        {/* 우리의 할일 / 나의 할일 토글 버튼 */}
        <T.ToggleContainer>
          <T.ToggleButton isActive={false} onClick={() => navigate('/ourtodo')}>
            <T.Icon src="/images/OnPeople.svg" alt="우리의 할일 아이콘" />
            우리의 할일
          </T.ToggleButton>
          <T.ToggleButton isActive={true}>
            <T.Icon src="/images/Person.svg" alt="나의 할일 아이콘" />
            나의 할일
          </T.ToggleButton>
        </T.ToggleContainer>

        {/* 집안일콕콕정리 */}
        <T.TextOur />

        {/* 오전 할일 섹션 */}
        <T.Section>
          <T.SectionTitle>오전</T.SectionTitle>
          {tasks.morning.length > 0 ? (
            tasks.morning.map((task) => (
              <T.TaskItem key={task.id}>
                {/* 수정 모드일 경우 Pen.svg, 아닐 경우 OnPeople.svg */}
                <T.TaskIcon
                  src={isEditMode ? '/images/Pen.svg' : '/images/OnPeople.svg'}
                  alt={isEditMode ? '수정' : '아이콘'}
                  onClick={() => {
                    if (isEditMode) setEditingTask(task.id);
                  }}
                />
                <div style={{ flex: 1 }}>
                  <T.Ment>같이해요</T.Ment>
                  {/* 수정 모드일 경우 TaskInput 표시, 그렇지 않으면 TaskText */}
                  {editingTask === task.id ? (
                    <T.TaskInput
                      defaultValue={task}
                      onBlur={(e) =>
                        saveTaskEdit('morning', task.id, e.target.value)
                      }
                      autoFocus
                    />
                  ) : (
                    <T.TaskText>{task.content}</T.TaskText>
                  )}
                </div>
                {/* 수정 모드일 경우 Trash.svg, 아닐 경우 체크박스 */}
                {isEditMode ? (
                  <T.TaskIcon
                    src="/images/Trash.svg"
                    alt="삭제"
                    onClick={() => deleteTask(task.id, 'morning')}
                  />
                ) : (
                  <T.CheckBox
                    src={
                      completedTasks.includes(task.id)
                        ? '/images/OnToDoCheck.svg'
                        : '/images/ToDoCheck.svg'
                    }
                    onClick={() => handleCheck(task.id)}
                  />
                )}
              </T.TaskItem>
            ))
          ) : (
            <></>
          )}
        </T.Section>

        {/* 오후 할일 섹션 */}
        <T.Section>
          <T.SectionTitle>오후</T.SectionTitle>
          {tasks.afternoon.length > 0 ? (
            tasks.afternoon.map((task) => (
              <T.TaskItem key={task.id}>
                <T.TaskIcon
                  src={isEditMode ? '/images/Pen.svg' : '/images/OnPeople.svg'}
                  alt={isEditMode ? '수정' : '아이콘'}
                  onClick={() => {
                    if (isEditMode) setEditingTask(task.id);
                  }}
                />
                <div style={{ flex: 1 }}>
                  <T.Ment>같이해요</T.Ment>
                  {editingTask === task.id ? (
                    <T.TaskInput
                      defaultValue={task.content}
                      onBlur={(e) =>
                        saveTaskEdit('afternoon', task.id, e.target.value)
                      }
                      autoFocus
                    />
                  ) : (
                    <T.TaskText>{task.content}</T.TaskText>
                  )}
                </div>
                {isEditMode ? (
                  <T.TaskIcon
                    src="/images/Trash.svg"
                    alt="삭제"
                    onClick={() => deleteTask('afternoon', task.id)}
                  />
                ) : (
                  <T.CheckBox
                    src={
                      completedTasks.includes(task.id)
                        ? '/images/OnToDoCheck.svg'
                        : '/images/ToDoCheck.svg'
                    }
                    onClick={() => handleCheck(task.id)}
                  />
                )}
              </T.TaskItem>
            ))
          ) : (
            <></>
          )}
        </T.Section>

        {/* 사용자 추가 항목 섹션 */}
        <T.Section>
          <T.SectionTitle>내가 추가한 우리의 할일</T.SectionTitle>
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
                {editingTask === `userAdded-${index}` ? (
                  <T.TaskInput
                    defaultValue={task.content}
                    onBlur={(e) =>
                      saveTaskEdit('userAdded', index, e.target.value)
                    }
                    autoFocus
                  />
                ) : (
                  <T.TaskText>{task.content}</T.TaskText>
                )}
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
                <T.Ment>나만의 집안일, 여기에 추가하고 관리해요!</T.Ment>
                <T.TaskInput
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="새로운 할일 입력"
                />
              </div>
            </T.TaskItem>
          )}
        </T.Section>
      </T.Content>

      {/* 페이지 하단 푸터 */}
      <T.FooterBackground>
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
      </T.FooterBackground>
    </T.PageContainer>
  );
}

export default OurTasks;
