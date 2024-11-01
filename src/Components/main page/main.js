import "./main.css";
import "animate.css";
import picture from "../Asset/frame.png";
import vector from "../Asset/Vector 2.png";
import { useState } from "react";

function Main() {
  const [translate, setTranslate] = useState("0px");
  const [translate2, setTranslate2] = useState("100%");
  const [opacity, setOpacity] = useState("0%");

  return (
    <div className="main__container">
      <div className="main__box">
        <div
          style={{ transform: `translateY(${translate})` }}
          className="profile__title "
        >
          <img
            src={vector}
            className="profile__vector--1 animate__animated animate__rubberBand animate__infinite"
            alt="Vector Decoration 1"
          />
          <img
            src={vector}
            className="profile__vector--2"
            alt="Vector Decoration 2"
          />
          <div className="hello__text">Hello</div>
          <div>
            I'm <span>Duy</span>,
          </div>
          <div>Business Analyst</div>
        </div>
        <div
          className="marketing__text elements"
          style={{ transform: `translateY(${translate2})`, opacity: opacity }}
        >
          😇😇😇
        </div>
        <div
          className="it__text elements"
          style={{ transform: `translateY(${translate2})`, opacity: opacity }}
        >
          💯💯💯
        </div>
        <img
          onMouseEnter={() => {
            setTranslate("540%");
            setTranslate2("0px");
            setOpacity("100%");
          }}
          onMouseLeave={() => {
            setTranslate("0px");
            setTranslate2("100%");
            setOpacity("0%");
          }}
          src={picture}
          className="profile__img animate__animated animate__zoomIn"
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Main;
