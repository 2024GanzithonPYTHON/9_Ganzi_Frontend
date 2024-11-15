import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as W from "./styledWelcome";

export function Welcome() {
  const navigate = useNavigate();

  const goGender = () => {
    navigate(`/gender`);
  };

  return (
    <>
      <W.Container>
        <W.InfoText>
          반가워요! 지금부터
          <br />
          생활 리듬을 만들어볼까요?
        </W.InfoText>
        <W.InfoText2>집안일 분배, 집콕콕과 함께해요!</W.InfoText2>
        <W.WelcomeLogo />
        <W.CompleteBtn onClick={goGender} />
      </W.Container>
    </>
  );
}

export default Welcome;
