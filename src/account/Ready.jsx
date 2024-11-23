import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "./styledReady";

export function Ready() {
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const navigate = useNavigate();

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname"); // localStorage에서 닉네임 가져오기

    if (storedNickname) {
      setNickname(storedNickname); // 닉네임 상태에 저장
    } else {
      console.error("닉네임 정보가 없습니다.");
      alert("로그인이 필요합니다. 다시 로그인해주세요.");
      navigate("/register"); // 로그인 페이지로 이동
    }
  }, [navigate]);

  const goMain = () => {
    navigate(`/main`);
  };

  return (
    <W.Container>
      <W.InfoText>모든 준비 완료!</W.InfoText>
      <W.InfoText2>
        이제 집콕콕이 {nickname}님 맞춤형으로 집안일을 콕콕 찝어드릴게요!
      </W.InfoText2>
      <W.WelcomeLogo />
      <W.CompleteBtn onClick={goMain} />
    </W.Container>
  );
}

export default Ready;
