import React from "react";
import s from "./Pricing.module.css";
import Table from "./Table";

const Pricing = () => {
  return (
    <div className={s.pricing}>
      <p className={s.h2}>PRICING</p>

      <p className={s.none}>
        Please select the sq/ft range of your property in order to see our
        pricing ( note* sq/ft must include finished basements )
      </p>
      <div className={s.prices}>
        <p>Select SQ/FT</p>
        <div className={s.priceCount}>
          <button>1000</button>
          <button>1000 - 1500</button>
          <button>1500 - 2000</button>
          <button>2000 - 3000</button>
          <button>3000 - 4500</button>
        </div>
      </div>

      <Table />
    </div>
  );
};

export default Pricing;
