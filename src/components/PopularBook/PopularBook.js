import { useState } from "react";
import classNames from "classnames/bind";

import { galleryData } from "../../assets/Data";
import SubTitle from "../../shared/SubTitle/SubtTitle";
import Book from "../../shared/Book/Book";

import styles from "./PopularBook.module.scss";
const cx = classNames.bind(styles);
function PopularBook() {
 
  const [category, setCategory] = useState("All");
  
  // filter galleryData
  const datas =
    category === "All"
      ? galleryData
      : galleryData.filter((item) => (item.category === category));

  const handleCategory = (category) => {
    setCategory(category);
  };
  return (
    <div className={cx("popular-book_container")}>
      <SubTitle subtitle={"some quality items"} title={"popular books"} />
      <div className={cx("category")}>
        <button
          onClick={() => handleCategory("All")}
          className={cx(category === "All" ? "active" : "")}
        >
          All
        </button>
        <button
          onClick={() => handleCategory("Business")}
          className={cx(category === "Business" ? "active" : "")}
        >
          Business
        </button>
        <button
          onClick={() => handleCategory("Technology")}
          className={cx(category === "Technology" ? "active" : "")}
        >
          Technology
        </button>
        <button
          onClick={() => handleCategory("Adventure")}
          className={cx(category === "Adventure" ? "active" : "")}
        >
          Adventure
        </button>
        <button
          onClick={() => handleCategory("Romantic")}
          className={cx(category === "Romantic" ? "active" : "")}
        >
          Romantic
        </button>
        <button
          onClick={() => handleCategory("Fictional")}
          className={cx(category === "Fictional" ? "active" : "")}
        >
          Fictional
        </button>
      </div>
      <div className={cx('book-container')}>
         {
          datas.map((book)=>(
            <Book key={book.id} book={book} />
          ))
         } 
      </div>
    </div>
  );
}

export default PopularBook;
