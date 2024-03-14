import { useState } from "react";
import classNames from "classnames/bind";

import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../assets/Data";
import { navRight } from "../../assets/Data";
import logoImg from "../../assets/logo.png";

import styles from "./NavBar.module.scss";
const cx = classNames.bind(styles);
function NavBar() {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const scollNavbar = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", scollNavbar);
  return (
    <nav className={cx("nav-bar", scroll ? "active" : "")}>
      <div className={cx("nav-container")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img src={logoImg} alt=""></img>
          </Link>
        </div>
        <ul className={cx("links", showMenu ? "show" : "hide")}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={cx((isActive) => (isActive ? "active" : ""))}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={cx("nav-right")}>
          {navRight.managements.map((icon) => (
            <Link to={icon.link} key={icon.id}>
              <icon.icon />
            </Link>
          ))}
          <button className={cx("menu-buttons")}>
            {showMenu ? (
              <GrClose onClick={() => setShowMenu(false)} />
            ) : (
              <VscMenu onClick={() => setShowMenu(true)} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
