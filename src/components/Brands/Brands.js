import classNames from "classnames/bind";

import styles from "./Brands.module.scss";
import { brandsData } from "../../assets/Data";

const cx = classNames.bind(styles);
function Brands() {
  return (
    <div className={cx("brands-container")}>
      {brandsData.map((brand) => (
        <img src={brand.img} alt="" key={brand.id}></img>
      ))}
    </div>
  );
}

export default Brands;
