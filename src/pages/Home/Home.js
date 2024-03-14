import classNames from "classnames/bind";
import { useEffect } from "react";

import Header from "../../components/Header/Header";
import Brands from "../../components/Brands/Brands";
import FeaturesBook from "../../components/FeaturesBook/FeaturesBook";
import BestBook from "../../components/BestBook/BestBook";
import PopularBook from "../../components/PopularBook/PopularBook";
import Quote from "../../components/Quote/Quote";
import Articles from "../../components/Articles/Articles";

import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Header />
      <Brands />
      <FeaturesBook />
      <BestBook />
      <PopularBook />
      <Quote />
      <Articles />
    </section>
  );
}

export default Home;
