import React, { useState } from "react";

const Mcom1 = () => {
  const [time, setTime] = useState(1);
  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };
  console.log("업데이터!!!");
  return (
    <div className="Mcom1">
      <h4>useState 시간</h4>
      <span>현재 시각 : {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
};

export default Mcom1;
