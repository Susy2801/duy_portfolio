import "./header.css";

import logo from "../Asset/Logo_main.png";

function Header() {
  return (
    <div className="header__container">
      <div className="header__box d-flex justify-content-between p-4 ">
        <nav className="d">
          <a href="#home" className="nav__btn">
            Home
          </a>
          <a href="#journey" className="nav__btn">
            My Journey
          </a>
          <a href="#experience" className="nav__btn">
            Work Experience
          </a>

          <img src={logo} alt="logo" className="header__logo"></img>

          <a className="nav__btn" href="#skill">
            Skill
          </a>
          <a className="nav__btn">Project</a>
          <a href="#contact" className="nav__btn">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
