import s from "./Updates.module.css";

import React from "react";

const Updates = () => {
  return (
    <div className={s.updates}>
      <img className={s.pic1} src="/image/pic1.jpg" />
      <img className={s.gray1} src="/image/gray1.jpg" />
      <div className={s.lastUpdates}>
        <p className={s.h2}>LAST UPDATES</p>
        <h3>New Service | VIRTUAL STAGING | starting at $45/photo</h3>
        <p>
          We are very excited to offer our VIRTUAL STAGING service To help our
          clients adapt to the fast-changing environment of today’s Real Estate
          Market and bring the best possible value proposition to your listings
          marketing. 2 days Turnaround Beautiful Ultra-Realistic Interiors
          Design that compliments your space We can work with both Empty and
          Furnished spaces
        </p>
        <button>Discover more</button>
      </div>
      <div className={s.pages}>
        <img src="/image/arrLeft.png" />
        <p>
          <span> 01 /</span> 04{" "}
        </p>
        <img src="/image/arrRight.png" />
      </div>
    </div>
  );
};

export default Updates;
