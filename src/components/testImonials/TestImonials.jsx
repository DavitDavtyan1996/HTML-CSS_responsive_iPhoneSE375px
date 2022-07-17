import s from "./TestImonials.module.css";
import React from "react";

const TestImptionals = () => {
  return (
    <div className={s.testImptionals}>
      <h2>TestImonials</h2>
      <p className={s.disNone}>TestImonials</p>

      <div className={s.scroll}>
        <div className={s.users}>
          <div className={s.user}>
            <img className={s.userPhoto} src="/image/userPhoto1.png" />
            <div className={s.userDescription}>
              <p className={s.name}>John Smith</p>
              <p>Lorem ipsum</p>
              <div className={s.stars}>
                <img src="/image/star.png" />
                <img src="/image/star.png" />
                <img src="/image/star.png" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <span className={s.none}>
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text{" "}
                </span>
                <span className={s.underline}>more</span>
              </p>
            </div>
          </div>

          <div className={s.user}>
            <img className={s.userPhoto} src="/image/userPhoto2.png" />
            <div className={s.userDescription}>
              <p className={s.name}>John Smith</p>
              <p>Lorem ipsum</p>
              <div className={s.stars}>
                <img src="/image/star.png" />
                <img src="/image/star.png" />
                <img src="/image/star.png" />
                <img src="/image/star.png" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <span className={s.none}>
                  {" "}
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard{" "}
                </span>
                <span className={s.underline}>less</span>
              </p>
            </div>
          </div>

          <div className={s.user}>
            <img className={s.userPhoto} src="/image/userPhoto3.png" />
            <div className={s.userDescription}>
              <p className={s.name}>John Smith</p>
              <p>Lorem ipsum</p>
              <div className={s.stars}>
                <img src="/image/star.png" />
                <img src="/image/star.png" />
                <img src="/image/star.png" />
                <img src="/image/star.png" />
                <img src="/image/star.png" />
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <span className={s.none}>
                  {" "}
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text{" "}
                </span>
                <span className={s.underline}>more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.pagination}>
        <img src="/image/squareYellow.png" />
        <img src="/image/square.png" />
        <img src="/image/square.png" />
      </div>
    </div>
  );
};

export default TestImptionals;
