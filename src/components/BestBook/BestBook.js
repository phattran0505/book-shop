import classNames from "classnames/bind";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { sellingBooksData } from "../../assets/Data";
import victoImg from "../../assets/victor.png";

import styles from "./BestBook.module.scss";
const cx = classNames.bind(styles);
function BestBook() {
  return (
    <div className={cx("best-book_container")}>
      {sellingBooksData.map((book) => (
        <div className={cx("best-book")} key={book.id}>
          <div className={cx("best-book_img")}>
            <Link to={book.shopbtnLink}>
              <img src={book.img} alt=""></img>
            </Link>
          </div>
          <div className={cx("best-book_info")}>
            <h2>Best Selling Book</h2>
            <img src={victoImg} alt=""></img>
            <p className={cx("best-book_writter")}>{book.infoTitleTop}</p>
            <h3>{book.infoTitle}</h3>
            <p className={cx("best-book_desc")}>{book.desc}</p>
            <h5 className={cx("price")}>{book.price}</h5>
            <Link to={book.shopbtnLink} className={cx("shop-btn")}>
              shop it now <FaArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BestBook;
