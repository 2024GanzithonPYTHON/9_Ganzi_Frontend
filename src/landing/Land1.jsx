import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "./styledLand1";

export function Land1() {
  const navigate = useNavigate();

  const goLand2 = () => {
    navigate(`/land2`);
    window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
  };

  return (
    <W.Container>
      <W.CompleteBtn onClick={goLand2} />
    </W.Container>
  );
}

export default Land1;
