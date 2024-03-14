import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import { GoArrowRight } from "react-icons/go";
import { latestArticleData } from "../../assets/Data";
import SubTitle from "../../shared/SubTitle/SubtTitle";
import NewsCard from "../../shared/NewsCard/NewsCard";

import styles from "./Articles.module.scss";
const cx = classNames.bind(styles);
function Articles() {
  return (
    <div className={cx("article-container")}>
      <SubTitle title={"latest articles"} subtitle={"read our articles"} />
      <div className={cx("news-container")}>
        {latestArticleData.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
      <div className={cx("button")}>
        <Link to="*" className={cx("btn", "articels-btn")}>
          read all articles
          <GoArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default Articles;
