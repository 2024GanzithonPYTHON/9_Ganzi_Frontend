import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKakaoCallback = async () => {
      const queryParams = new URLSearchParams(window.location.search);
      const code = queryParams.get("code"); // URL에서 인증 코드 추출

      if (code) {
        try {
          console.log("Authorization Code: ", code);

          // 백엔드로 인증 코드 전달 및 사용자 정보 요청
          const response = await axios.post(
            "https://ganzithon.hyunwoo9930.store/oauth2/authorization/kakao", // 백엔드 API 경로
            { code },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          console.log("User Profile: ", response.data);

          // 사용자 정보 저장 (예: localStorage 또는 전역 상태 관리)
          const { nickname, profileImage } = response.data;
          localStorage.setItem("nickname", nickname);
          localStorage.setItem("profileImage", profileImage);

          // Gender 페이지로 이동
          navigate("/gender");
        } catch (error) {
          console.error("Error during Kakao callback: ", error);
          alert("로그인 처리 중 문제가 발생했습니다.");
        }
      } else {
        alert("Authorization Code가 없습니다.");
      }
    };

    handleKakaoCallback();
  }, [navigate]);

  return <div>로그인 처리 중...</div>;
};

export default KakaoCallback;
