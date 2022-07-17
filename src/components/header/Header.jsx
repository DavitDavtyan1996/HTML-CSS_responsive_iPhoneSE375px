import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.gradient}>
        <div className={s.headerNav}>
          <div className={s.navLeftSide}>
            <p>PRICING</p>
            <p>ORDER A TOUR</p>
            <p>
              SERVICES <img src="/image/arrowDown.png" />
            </p>
          </div>
          <div className={s.navRightSide}>
            <div>
              <img src="/image/call.png" /> <p>(905) 766 9009</p>
            </div>
            <div>
              <img src="/image/cart.png" /> <p>Cart (0)</p>
            </div>
            <button>Sign In / Sign Up</button>
            <img  className={s.burger} src="/image/burger.png"/>
          </div>
        </div>
        <div className={s.tours}>
          <div>
            <h1>CAPTIVATING PROPERY TOURS</h1>{" "}
          </div>
          <div className={s.buttons}>
            <button className={s.backgroundWhite}>Pricing<span>(hover)</span></button>
            <button className={s.backgroundOpacity}>Our work</button>
            <button className={s.backgroundYellow}>Order a tour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
