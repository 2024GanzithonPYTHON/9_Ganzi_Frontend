import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as W from "./styledReady";

export function Ready() {
  const navigate = useNavigate();

  const goGender = () => {
    navigate(`/gender`);
  };

  return (
    <>
      <W.Container>
        <W.InfoText>모든 준비 완료!</W.InfoText>
        <W.InfoText2>
          이제 집콕콕이 사용자님 맞춤형으로 집안일을 콕콕 찝어드릴게요!
        </W.InfoText2>
        <W.WelcomeLogo />
        <W.CompleteBtn onClick={goGender} />
      </W.Container>
    </>
  );
}

export default Ready;
