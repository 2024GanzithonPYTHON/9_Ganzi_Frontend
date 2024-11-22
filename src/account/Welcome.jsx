import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "./styledWelcome";

export function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    // localStorage에서 토큰 확인
    const token = localStorage.getItem("Authorization");

    if (!token) {
      console.error("No token found. Redirecting to login page...");
      alert("로그인이 필요합니다. 다시 로그인해주세요.");
      navigate("/"); // 로그인 페이지로 리다이렉트
    } else {
      console.log("Token found:", token);
    }
  }, [navigate]);

  const goGender = () => {
    navigate(`/gender`);
  };

  return (
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
  );
}

export default Welcome;
