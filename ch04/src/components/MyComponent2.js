import React, { useState } from "react";

const MyComponent2 = () => {
  //state 선언
  const [fColor, setFColor] = useState("#000");
  const [bColor, setBColor] = useState("green");
  const [txtMsg, setTxtmsg] = useState("입력하세요");

  //핸들러
  function onClick1() {
    alert("onClick1!!!");
  }

  const onClick2 = () => {
    alert("onClick2!!!");
  };
  const onToggle = () => {
    if (fColor === "#f00") {
      setFColor("#00f");
    } else {
      setFColor("#f00");
    }
  };
  const onLinkClick = (e) => {
    e.preventDefault();
    alert("onLinkClick!!!");
  };
  return (
    <div className="MyComponent2">
      <h5>MyComponent2 Event</h5>
      {/* click 이벤트 */}
      <h1 style={{ color: fColor }}>Click!!!</h1>
      <button
        onClick={() => {
          alert("클릭1");
        }}
      >
        클릭1
      </button>
      <button onClick={onClick1}>클릭2</button>
      <button onClick={onClick2}>클릭3</button>

      <button
        onClick={() => {
          setFColor("#F00");
        }}
      >
        클릭4
      </button>
      <button onClick={onToggle}>클릭5</button>
      <a href="http://naver.com" onClick={onLinkClick}>
        클릭6
      </a>

      {/* mouse 이벤트 */}
      <h1
        style={{ backgroundColor: bColor }}
        onMouseOver={() => {
          setBColor("orange");
        }}
        onMouseOut={() => {
          setBColor("orchid");
        }}
      >
        Mouse 이벤트
      </h1>

      {/* change 이벤트 */}
      <h1>{txtMsg}</h1>
      <input
        type="text"
        value={txtMsg}
        onChange={(e) => {
          setTxtmsg(e.target.value);
        }}
      />
    </div>
  );
};

export default MyComponent2;
