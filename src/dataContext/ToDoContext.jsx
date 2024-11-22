import React, { createContext, useContext, useState, useEffect } from 'react';

const ToDoContext = createContext();

export function ToDoProvider({ children }) {
  // 전역에서 관리할 할일 데이터
  const [toDos, setToDos] = useState([]);

  // 초기 데이터를 localStorage에서 가져옴
  useEffect(() => {
    const storedToDos = localStorage.getItem('toDos');
    if (storedToDos) {
      setToDos(JSON.parse(storedToDos));
    } else {
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
    }
  }, []);

  // 할일 데이터가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  return (
    <ToDoContext.Provider value={{ toDos, setToDos }}>
      {children}
    </ToDoContext.Provider>
  );
}

export function useToDo() {
  return useContext(ToDoContext);
}
