import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as L from './styledLoading';

export function Loading() {
  const navigate = useNavigate();

  return (
    <>
      <L.Container>
        <L.WelcomeLogo />
        <L.InfoText2>
          두 분의 스케줄과 정보를 바탕으로 집안일을 콕콕 나누는 중이에요.
        </L.InfoText2>
        <L.CompleteBtn onClick={() => navigate('/ourtodo')} />
      </L.Container>
    </>
  );
}

export default Loading;
