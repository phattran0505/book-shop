import classNames from "classnames/bind";

import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";
import { useEffect } from "react";
const cx = classNames.bind(styles);
function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={cx("notfound-section")}>
      <div className={cx("notfound-container")}>
        <h1>404</h1>
        <h3>opps,this page not found</h3>
        <Link to="/" className={cx("btn")}>
          go to home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
