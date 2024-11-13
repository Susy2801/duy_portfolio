import "./contact.css";
import logo from "../Asset/Logo_main.png";
import telegram from "../Asset/Telegram_logo.svg.webp";
import {useEffect, useState} from "react";

function Contact() {
  const [viewers,setViewers] = useState("")

  useEffect(() =>
  {async function updateViewer() {
    const url  = "https://express-server-roan.vercel.app/visit/stat"
    const response = await fetch(url);
    const data = await response.json();
    setViewers(data.totalVisit)

  }
    updateViewer()
  }, []);


  return (
    <div className="contact__container">
      <div className="contact__box">
        <div className="contact__header">
          <div className="contact__header--text">
            Connect <span>With Me</span>
          </div>
          <button className="contact__header__button">Hire me</button>
        </div>
        <div className="contact__info">
          <div className="info__box">
            <div className="contact__title">
              <img alt="logo" src={logo}></img>
              Duy Nguyễn
            </div>
            <div>
              Lorem isump Lorem isumpLorem isumpLorem isumpLorem isumpLorem
              isumpLorem isumpLorem isumpLorem isumpLorem isump
            </div>

            <div className="viewer__static"> Số lượt truy cập: {viewers}</div>
          </div>
          {/* ______________ */}

          {/* ______________ */}
          <div className="contact__contact">
            <div className="contact__title">Contact</div>
            <div className="contact__list">
              <div >0702083048</div>
              <div>Nduy200@gmail.com</div>
              <div>duynguyen.id.vn</div>
            </div>
          </div>
          {/* ______________ */}
          <div className="contact__telegram">
            <div className="contact__title">Send me a message</div>
            <div className="telegram__input">
              <input />
              <img src={telegram}></img>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="copyright">
          <div>Copyright© 2024 Duy. All Rights Reserved.</div>
          <div>User Terms & Conditions | Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
