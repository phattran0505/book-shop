import classNames from "classnames/bind";

import victorImg from "../../assets/victor.png";

import styles from "./SubTitle.module.scss";
const cx = classNames.bind(styles);
function SubTitle({ title, subtitle }) {
  return (
    <div className={cx("sub-container")}>
      <div className={cx("sub-content")}>
        <p>{subtitle}</p>
        <h2>{title}</h2>
        <img src={victorImg} alt=""></img>
      </div>
    </div>
  );
}

export default SubTitle;
