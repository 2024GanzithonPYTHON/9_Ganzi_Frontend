import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "./styledLand1";

export function Land4() {
  const navigate = useNavigate();

  const goRegister = () => {
    navigate(`/register`);
    window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
  };

  return (
    <W.Container>
      <W.CompleteBtn onClick={goRegister} />
    </W.Container>
  );
}

export default Land4;
