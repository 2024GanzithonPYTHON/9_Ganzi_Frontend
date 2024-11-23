import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "./styledLand2";

export function Land2() {
  const navigate = useNavigate();

  const goLand3 = () => {
    navigate(`/land3`);
    window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
  };

  return (
    <W.Container>
      <W.CompleteBtn onClick={goLand3} />
    </W.Container>
  );
}

export default Land2;
