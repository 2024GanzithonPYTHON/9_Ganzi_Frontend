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
      console.error("Token not found in the URL.");
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
      window.location.href = "/register";
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

      alert("로그인에 성공했습니다!");
      window.location.href = "/welcome";
    } catch (error) {
      console.error("Failed to fetch user info:", error.message);
      alert("사용자 정보를 가져오는 데 실패했습니다. 다시 로그인해주세요.");
      window.location.href = "/register";
    }
  };

  return <div>Processing Kakao Login...</div>;
}

export default RedirectHandler;
