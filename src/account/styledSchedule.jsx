import styled from "styled-components";

// 페이지 배경
export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: linear-gradient(
    to bottom,
    #ffffff 181px,
    #fafafa 0
  ); /* 위는 흰색, 아래는 회색 */
  border: 1px solid #fafafa;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Pretendard Variable"; /* 글로벌 폰트 설정 */
`;

// 뒤로가기 버튼
export const BackBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 11%;
  width: 30px;
  top: 7%;
  height: 30px;
  flex-shrink: 0;
  background-image: url("/images/BackBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-repeat: no-repeat;
`;

// 날짜 타이틀
export const DateTitle = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 39%;
  top: 6.7%;
  color: #8f34ff;
  font-family: "Pretendard Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px; /* 94.444% */
  letter-spacing: -0.54px;
`;

// 요일과 날짜 래퍼
export const WeekWrapper = styled.div`
  display: flex;
  justify-content: space-between; /* 간격을 좁히기 위해 'space-between' 대신 'space-evenly'나 'flex-start' 등을 사용할 수 있습니다 */
  margin-bottom: 50px;
  width: 85%; /* 요일이 전체 영역에 고르게 분포되도록 */
  margin-left: 13px;
`;

// 각 요일 스타일
export const Day = styled.div`
  display: flex;
  margin-top: 70px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  background-image: ${(props) =>
    props.isToday
      ? "url('/images/OnDateIcon.svg')"
      : "none"}; /* 오늘 날짜 배경 이미지 */
  background-position: center; /* 이미지 위치 조정 */
  background-repeat: no-repeat; /* 이미지 반복 제거 */
  width: 36px;
  height: 56px;
  span:first-child {
    font-weight: bold;
    font-size: 14px;
    color: ${(props) =>
      props.isToday ? "#fff" : "#9ea2b0"}; /* 요일 색상 변경 */
    margin-bottom: 7px; /* 요일과 날짜 사이 간격 조정 */
    font-weight: 500;
  }

  span:last-child {
    font-size: 14px;
    font-weight: 700;
    color: ${(props) =>
      props.isToday
        ? "#8F34FF"
        : "#9EA2B0"} !important; /* 날짜 색상 변경, !important 추가 */
  }
`;

// 공통 섹션 스타일
export const Section = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #8f34ff; /* 보라색 변경 */
  margin-bottom: 10px;
  display: block;
  color: #8f34ff;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 31px; /* 206.667% */
  letter-spacing: -0.45px;
`;

// 연회색 배경
export const LightGrayBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 58%;
  margin: 0 auto;
  width: 393px;
  height: 671px;
  box-sizing: border-box;
  background: #fafafa;
  z-index: -1;
`;

export const Input = styled.input`
  width: 317px;
  height: 35px;
  flex-shrink: 0;
  margin-top: 5px;
  border-radius: 6px;
  background: #fff;
  padding-left: 10px;
  border: none;
  color: #9ea2b0;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 31px; /* 206.667% */
  letter-spacing: -0.45px;
  font-family: "Pretendard Variable";

  &:focus {
    outline: none; /* 기본 브라우저 outline 제거 */
    border: 1.5px solid #8f34ff; /* focus 시 border 색상 및 두께 변경 */
  }
`;

// 일정 시간 버튼
export const DurationWrapper = styled.div`
  position: absolute;
  top: 36%;
  margin-top: 30px;
  display: flex; /* 내부 요소를 flexbox로 정렬 */
  gap: 10px; /* 버튼 간격 조정 */
`;

export const DurationButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  color: ${(props) => (props.active ? "#fff !important" : "#8f34ff")};
  background-color: ${(props) => (props.active ? "#8f34ff" : "#fff")};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: #9ea2b0;
  font-family: "Pretendard Variable";
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px; /* 113.333% */
  letter-spacing: -0.45px;

  &:hover {
    background-color: #8f34ff;
    color: #fff;
  }
`;

// 시간 선택
export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
`;

export const TimeInput = styled.select`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// 확인 버튼
export const CompleteBtn = styled.button`
  position: absolute;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  left: 50%;
  top: 95%;
  width: 334px;
  height: 57px;
  flex-shrink: 0;
  background-image: url("/images/CompleteBtn.svg");
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
