import React, { useEffect } from "react";

export function RedirectHandler() {
  useEffect(() => {
    console.log("RedirectHandler mounted");

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      console.log("Extracted token:", token);

      localStorage.setItem("Authorization", `Bearer ${token}`);
      console.log("Token saved to localStorage");

      fetchUserInfo(token);
    } else {
      handleError("Token not found in the URL.");
    }
  }, []);

  const fetchUserInfo = async (token) => {
    try {
      const response = await fetch("/user/info", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch user info: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("User Info Data:", data);

      const nickname = data.nickname || "Unknown";
      const profileImage = data.image || "";

      localStorage.setItem("nickname", nickname);
      localStorage.setItem("profileImage", profileImage);

      console.log("Nickname and profile image saved to localStorage");

      // 팝업이 한 번만 뜨도록 로컬 스토리지에 상태 저장
      if (!localStorage.getItem("isAlertShown")) {
        alert("로그인에 성공했습니다!");
        localStorage.setItem("isAlertShown", "true");
      }

      window.location.href = "/welcome";
    } catch (error) {
      handleError("사용자 정보를 가져오는 데 실패했습니다.");
    }
  };

  const handleError = (message) => {
    console.error(message);

    // 실패 팝업도 한 번만 뜨도록 로컬 스토리지에 상태 저장
    if (!localStorage.getItem("isAlertShown")) {
      alert(message + " 다시 로그인해주세요.");
      localStorage.setItem("isAlertShown", "true");
    }

    window.location.href = "/register";
  };

  return <div></div>;
}

export default RedirectHandler;
