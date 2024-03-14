import classNames from "classnames/bind";

import victorImg from "../../assets/victor.png";
import { quoteData } from "../../assets/Data";

import styles from "./Quote.module.scss";
import { Fragment } from "react";
const cx = classNames.bind(styles);
function Quote() {
  return (
    <div className={cx("quote-container")}>
      <div className={cx("sub-title")}>
        {quoteData.map((quote) => (
          <Fragment key={quote.id}>
            <h2>Quote Of The Day</h2>
            <img src={victorImg} alt=""></img>
            <h4>
              {quote.quote}
            </h4>
            <p>{quote.speaker}</p>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Quote;
