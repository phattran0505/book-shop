import classNames from "classnames/bind";

import { Link } from "react-router-dom";
import { FootersLinksData } from "../../assets/Data";
import Copyright from "../../shared/Copyright/Copyright";

import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer-content")}>
        {/* about us  */}
        <div>
          <h4>About Us</h4>
          <ul className={cx("footer-links")}>
            {FootersLinksData.Aboutus.map((link, index) => (
              <li key={index}>
                <Link to={link.link}>{link.linkname}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* discover */}
        <div>
          <h4>Discover</h4>
          <ul className={cx("footer-links")}>
            {FootersLinksData.Discover.map((link, index) => (
              <li key={index}>
                <Link to={link.link}>{link.linkname}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* account */}
        <div>
          <h4>My Account</h4>
          <ul className={cx("footer-links")}>
            {FootersLinksData.Myaccount.map((link, index) => (
              <li key={index}>
                <Link to={link.link}>{link.linkname}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* helps */}
        <div>
          <h4>Helps</h4>
          <ul className={cx("footer-links")}>
            {FootersLinksData.Help.map((link, index) => (
              <li key={index}>
                <Link to={link.link}>{link.linkname}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx("footer-copyright")}>
        <Copyright/>
      </div>
    </footer>
  );
}

export default Footer;
