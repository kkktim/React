import React, { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업!!!");
  return ["홍길동", "김민수"];
};

const Mcom2 = () => {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState("");

  const handlerInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state:", prevState);
      return [input, ...prevState];
    });
  };

  return (
    <div className="Mcom2">
      <input type="text" value={input} onChange={handlerInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
};

export default Mcom2;
