import React, { useEffect } from "react";
import * as W from "./styledRegister";

export function Register() {
  useEffect(() => {
    const kakao = window.Kakao;

    // Kakao SDK 초기화
    if (!kakao.isInitialized()) {
      kakao.init("323bb0737d404aebe1f6331338cf21b7"); // Kakao 앱 키 설정
      console.log("Kakao SDK Initialized");
    }
  }, []);

  // 카카오 로그인 버튼 클릭 시 실행되는 함수
  const handleKakaoLogin = () => {
    // Kakao 로그인 페이지로 리다이렉트
    window.location.href =
      "https://ganzithon.hyunwoo9930.store/oauth2/authorization/kakao";
  };

  return (
    <W.Container>
      <W.StartWall />
      <W.LoginBtn onClick={handleKakaoLogin} />
    </W.Container>
  );
}

export default Register;
