import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "./styledChild";

export function Child() {
  const [childCount, setChildCount] = useState(0); // 자녀 수 상태
  const [petCount, setPetCount] = useState(0); // 반려동물 수 상태
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const [profileImage, setProfileImage] = useState(""); // 프로필 이미지 상태
  const navigate = useNavigate();

  // 프로필 정보 가져오기
  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    const storedProfileImage = localStorage.getItem("profileImage");

    if (storedNickname && storedProfileImage) {
      setNickname(storedNickname);
      setProfileImage(storedProfileImage);
    } else {
      console.error("Profile information is missing");
      alert("프로필 정보가 누락되었습니다. 다시 로그인해주세요.");
      navigate("/"); // 로그인 페이지로 이동
    }
  }, [navigate]);

  // children과 pet 데이터를 서버로 전송하는 함수
  const sendChildrenAndPet = async () => {
    const token = localStorage.getItem("Authorization"); // 토큰 가져오기

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/register"); // 로그인 페이지로 이동
      return;
    }

    try {
      const response = await fetch(
        "https://ganzithon.hyunwoo9930.store/user/additionalInfo",
        {
          method: "PATCH",
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            children: childCount, // 자녀 수
            pet: petCount, // 반려동물 수
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to send children and pet: ${response.status}`);
      }

      console.log("Children and pet data successfully sent to backend.");
      navigate(`/housework`); // 성공적으로 저장되면 다음 페이지로 이동
    } catch (error) {
      console.error("Error sending children and pet:", error.message);
      alert(
        "자녀와 반려동물 정보를 저장하는 데 실패했습니다. 다시 시도해주세요."
      );
    }
  };

  const goHousework = () => {
    sendChildrenAndPet(); // API 호출
  };

  return (
    <C.Container>
      <C.ProfileImg>
        <img src={profileImage} alt={`${nickname}'s profile`} />
      </C.ProfileImg>
      <C.Nickname>{nickname}</C.Nickname>
      <C.InfoText>
        <span>사랑스러운 </span>
        <C.HighlightText>자녀</C.HighlightText>
        <span>가 있나요?</span>
      </C.InfoText>

      {/* 자녀 아이콘 */}
      <C.ChildIcon isSelected={childCount >= 1} />
      <C.ChildCount>
        <C.Label style={{ marginTop: "155px" }}>아이</C.Label>
        <C.Counter isSelected={childCount > 0} style={{ marginTop: "155px" }}>
          <C.PlusBtn onClick={() => setChildCount(childCount + 1)} />
          <span>{childCount}명</span>
          <C.MinusBtn
            onClick={() => setChildCount(Math.max(0, childCount - 1))}
          />
        </C.Counter>
      </C.ChildCount>

      {/* 반려동물 아이콘 */}
      <C.PetIcon isSelected={petCount >= 1} />
      <C.PetCount>
        <C.Label style={{ marginTop: "350px" }}>반려동물</C.Label>
        <C.Counter isSelected={petCount > 0} style={{ marginTop: "350px" }}>
          <C.PlusBtn onClick={() => setPetCount(petCount + 1)} />
          <span>{petCount}명</span>
          <C.MinusBtn onClick={() => setPetCount(Math.max(0, petCount - 1))} />
        </C.Counter>
      </C.PetCount>
      <C.NextBtn onClick={goHousework} />
    </C.Container>
  );
}

export default Child;
