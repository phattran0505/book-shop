import classNames from "classnames/bind";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import styles from "./NewsCard.module.scss";
const cx = classNames.bind(styles);
function NewsCard({ article }) {
  return (
    <div className={cx("card")}>
      <div className={cx("card-img")}>
        <img src={article.img} alt=""></img>
      </div>
      <div className={cx("card-info")}>
        <p>{article.date}</p>
        <Link to={article.titleLink}>
          <h4>{article.title}</h4>
        </Link>
        <div className={cx("card-footer")}>
          <p>{article.inspiration}</p>
          <div className={cx("card-links")}>
            <Link to={article.fbLink}>
              <FaFacebookF />
            </Link>
            <Link to={article.instLink}>
              <FaInstagram />
            </Link>
            <Link to={article.twistLink}>
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
