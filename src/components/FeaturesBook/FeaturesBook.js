import classNames from "classnames/bind";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { featuredBooksData } from "../../assets/Data";
import { IoMdReturnRight } from "react-icons/io";
import SubTitle from "../../shared/SubTitle/SubtTitle";

// Import styles
import "swiper/scss";
import "swiper/scss/pagination";
import styles from "./FeaturesBook.module.scss";
import Book from "../../shared/Book/Book";
const cx = classNames.bind(styles);
function FeaturesBook() {
  const breakpoints = {
    1024: {
      spaceBetween: 50,
      slidesPerView: 4,
    },
    800: {
      spaceBetween: 100,
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 1,
    },
    300: {
      slidesPerView: 1,
    },
    200: {
      slidesPerView: 1,
    },
    100: {
      slidesPerView: 1,
    },
  };
  return (
    <div className={cx("book-container")}>
      <SubTitle subtitle={"some quality items"} title={"features books"} />

      <div className={cx("slide-container")}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          breakpoints={breakpoints}
          pagination={{ el: ".swiper-pagination", clickable: true }}
        >
          {featuredBooksData.map((book) => (
            <SwiperSlide key={book.id}>
              <Book book={book} />
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
        <div className={cx("btn-box")}>
          <Link to="*" className={cx("btn", "feature-btn")}>
            view all products <IoMdReturnRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturesBook;
