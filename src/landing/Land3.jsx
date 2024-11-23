import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "./styledLand3";

export function Land3() {
  const navigate = useNavigate();

  const goLand4 = () => {
    navigate(`/land4`);
    window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
  };

  return (
    <W.Container>
      <W.CompleteBtn onClick={goLand4} />
    </W.Container>
  );
}

export default Land3;
