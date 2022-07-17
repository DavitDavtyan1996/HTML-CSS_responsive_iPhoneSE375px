import s from "./Footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.aboutUs}>
        <div className={s.services}>
          <p>Services </p>
          <p>PRICING</p>
          <p>ORDER A TOUR</p>
          <p>Sign IN / SIGN UP</p>
        </div>
        <div className={s.contactUs}>
          <div className={s.contact}>
            <img src="image/mobile.png" />
            <p className={s.number}>(000) 000 0000</p>
          </div>
          <div className={`${s.contact} ${s.time}`}>
            <img src="image/time.png" />
            <p>10:00 АМ - 18:00 PM</p>
          </div>
          <div className={s.contact}>
            <img src="image/linkedin.png" />
            <img className={s.inst} src="image/inst.png" />
            <img src="image/fb.png" />
          </div>
        </div>
      </div>
      <img className={s.footerLine} src="/image/footerLine.png" />
    </div>
  );
};

export default Footer;
