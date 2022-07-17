import s from "./Area.module.css";

import React from "react";

const Area = () => {
  return (
    <div className={s.area}>
      <h2>servicing area</h2>
      <img className={s.map} src="/image/map.jpg" />
      <img className={s.mobileMap} src="/image/mobileMap.jpg" />

      <img className={s.union} src="/image/Union.png" />
      <div className={s.check}>
        <div className={s.checked}>
          <input
            className={s.yellow}
            type="radio"
            name={"charge"}
            defaultChecked={true}
          />
          <p>No extra charge</p>
        </div>
        <div className={s.checked}>
          <input type="radio" name={"charge"} defaultChecked={false} />
          <p>Extra charge</p>
        </div>
      </div>
    </div>
  );
};

export default Area;
