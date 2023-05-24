import { useState } from "react";
import S from "../css/BarChar.module.css";

const BarChar = ({ data }) => {
  const [mouse, setMouse] = useState([0, 0]);
  const [active, setActive] = useState(false);
  const [squareContent, setSquareContent] = useState([]);
  const yNumbers = [12, 9, 6, 3, 0];

  const y = yNumbers.map((element, i) => {
    return (
      <div key={i}>
        <span>{element}</span>
      </div>
    );
  });

  const bars = data.map((element, i) => {
    return (
      <div
        onMouseOver={() => {
          setSquareContent([element[0], element[1]]);
        }}
        key={i}
        className={S.bar}
        data-count={element[1]}
        data-date={element[0]}
      >
        <div style={{ maxHeight: `${(+element[1] / 12) * 100}%` }} className={S.innerBox}></div>
      </div>
    );
  });

  const x = data.map((element, i) => {
    return (
      <div key={i}>
        <div className={S.text}>{element[0]}</div>
      </div>
    );
  });

  return (
    <div className={S.barChar}>
      <div className={S.y}>{y}</div>
      <div
        onMouseMove={(e) => {
          setMouse([e.clientX, e.clientY + 12]);
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className={S.body}
      >
        <div className={S.grids}>
          <div></div> <div></div>
          <div></div>
          <div></div> <div></div> <div></div>
          <div></div> <div></div> <div></div>
          <div></div> <div></div> <div></div>
          <div></div> <div></div> <div></div>
          <div></div> <div></div> <div></div>
          <div></div> <div></div> <div></div>
          <div></div> <div></div>
          <div></div>
          <div></div> <div></div>
          <div></div> <div></div>
        </div>

        <div className={S.bars}>{bars}</div>
        <div style={{ top: mouse[1], left: mouse[0] }} className={`${S.square} ${active ? S.on : ""} `}>
          {squareContent[0]}
          <br />
          {squareContent[1]}
        </div>
      </div>
      <div></div>
      <div className={S.x}>{x}</div>
    </div>
  );
};

export default BarChar;
