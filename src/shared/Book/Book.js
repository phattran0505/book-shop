import classNames from "classnames/bind";

import styles from "./Book.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Book({ book }) {
  return (
    <div className={cx("book-card")} >
      <Link to={book.imglink} className={cx("book-img")}>
        <img src={book.img} alt=""></img>
      </Link>
      <div className={cx("book-content")}>
        <Link to={book.nameLink}>
          <h5 style={{fontWeight:"600"}}>{book.name}</h5>
        </Link>
        <p className={cx("book-writer")}>{book.writer}</p>
        <h5 className={cx("book-price")}>{book.price}</h5>
      </div>
    </div>
  );
}

export default Book;
