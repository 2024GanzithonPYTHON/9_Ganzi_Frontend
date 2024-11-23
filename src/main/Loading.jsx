import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as L from './styledLoading';
import axios from 'axios';

export function Loading() {
  const navigate = useNavigate();

  // CompleteBtn 클릭 시 호출될 함수 정의
  const handleComplete = async () => {
    try {
      const token = localStorage.getItem('Authorization');
      if (!token) {
        alert('로그인 토큰이 없습니다. 다시 로그인해주세요.');
        return;
      }
      // API GET 요청 보내기
      const response = await axios.get(
        'https://ganzithon.hyunwoo9930.store/chat-gpt/TODO',
        {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // 요청 성공 시 데이터 확인 (콘솔 출력)
      console.log('API 응답 데이터:', response.data);

      // 페이지 이동 (ourtodo로)
      navigate('/ourtodo');
    } catch (error) {
      // 에러 처리
      console.error('API 요청 중 에러 발생:', error);
      if (error.response && error.response.status === 401) {
        alert('인증에 실패했습니다. 다시 로그인해주세요.');
        navigate('/login'); // 로그인 페이지로 이동
      } else if (error.response) {
        alert(`서버 에러: ${error.response.statusText}`);
      } else {
        alert('네트워크 에러: 서버와의 연결에 실패했습니다.');
      }
    }
  };

  return (
    <>
      <L.Container>
        <L.WelcomeLogo />
        <L.InfoText2>
          두 분의 스케줄과 정보를 바탕으로 집안일을 콕콕 나누는 중이에요.
        </L.InfoText2>
        <L.CompleteBtn onClick={handleComplete} />
      </L.Container>
    </>
  );
}

export default Loading;
