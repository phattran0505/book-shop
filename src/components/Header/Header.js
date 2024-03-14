import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { headerBooks } from "../../assets/Data";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);
function Header() {
  
  return (
    <header>
      <div className={cx("header-container")}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          loop={true}
          slidesPerView={1}
          navigation={{ prevEl: ".prev-button", nextEl: ".next-button" }}
          pagination={{el:".swiper-pagination", clickable: true }}
        >
          {headerBooks.map((book) => (
            <SwiperSlide key={book.id}>
              <div className={cx("book-container")}>
                <div className={cx("book-content")}>
                  <h2>{book.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: book.info }}></p>

                  <div className="button">
                    <Link to={book.btnLink} className={cx("btn","more-btn")}>
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className={cx("book-img")}>
                  <img src={book.img} alt=""></img>
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* =====  navigation ========*/}
          <div className={cx("slider-buttons")}>
            <div className={cx("slide-button", "prev-button")}>
              <GoArrowLeft />
            </div>
            <div className={cx("slide-button", "next-button")}>
              <GoArrowRight />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </header>
  );
}

export default Header;
