import React, { useEffect } from "react";

export function RedirectHandler() {
  useEffect(() => {
    console.log("RedirectHandler mounted");

    // 현재 URL에서 전체 구조 확인
    const currentUrl = window.location.href;
    console.log("Full URL:", currentUrl);

    // URLSearchParams로 token 값 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log("Extracted token:", token);

    if (token) {
      // 토큰을 localStorage에 저장
      localStorage.setItem("Authorization", `Bearer ${token}`);
      console.log("Token saved to localStorage");

      // 성공 메시지
      alert("로그인에 성공했습니다!");

      // Welcome 페이지로 리다이렉트
      window.location.href = "/welcome";
    } else {
      console.error("Token not found in the URL.");
      alert("로그인에 실패했습니다. 다시 시도해주세요.");

      // 실패 시 로그인 페이지로 리다이렉트
      window.location.href = "/register";
    }
  }, []);

  return <div>Processing Kakao Login...</div>;
}

export default RedirectHandler;
