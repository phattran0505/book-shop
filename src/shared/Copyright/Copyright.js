import classNames from "classnames/bind";

import { FaRegCopyright } from "react-icons/fa";
import { FootersLinksData } from "../../assets/Data";

import styles from "./Copyright.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Copyright() {
  return (
    <>
      <div className={cx("copyright-text")}>
        <p>
          <>
            <FaRegCopyright />
          </>
          2024 Phat, All rights reserved
        </p>
      </div>
      <ul className={cx("copyright-links")}>
        {FootersLinksData.socials.map((link, index) => (
          <li key={index}>
            <Link to={link.link}>
              <link.icon />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Copyright;
