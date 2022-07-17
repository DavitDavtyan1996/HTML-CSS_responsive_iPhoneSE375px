import React from "react";
import s from "./AddServices.module.css";

const AddSercices = () => {
  const serviceTypes = [
    { img: "/image/photo.png", price: 129, name: "Twilight Photography" },
    {
      img: "/image/agent.png",
      price: 129,
      name: "Agent Video Presentation(hover)",
    },
    { img: "/image/3dScan.png", price: 129, name: "Matterport" },
    { img: "/image/drone.png", price: 129, name: "Drone" },
    { img: "/image/photo.png", price: 129, name: "Twilight Photography" },
    { img: "/image/agent.png", price: 129, name: "Agent Video Presentation" },
    { img: "/image/photo.png", price: 129, name: "Twilight Photography" },
    {
      img: "/image/agent.png",
      price: 129,
      name: "Agent Video Presentation(hover)",
    },
    { img: "/image/3dScan.png", price: 129, name: "Matterport" },
    { img: "/image/drone.png", price: 129, name: "Drone" },
    { img: "/image/photo.png", price: 129, name: "Twilight Photography" },
    { img: "/image/agent.png", price: 129, name: "Agent Video Presentation" },
  ];

  return (
    <div className={s.services}>
      <div className={s.aboutServices}>
        <p className={s.h2}>Additional services</p>
        <p>
          Customize your experience by adding any additional services to any
          Package
        </p>
      </div>
      <div className={s.scroll}>
        <div className={s.ourServices}>
          {serviceTypes.map((type, i) => {
            return (
              <div key={i} className={s.type}>
                <div className={s.container}>
                  <img src={type.img} />
                  <p>
                    <span>$</span>
                    {type.price}
                  </p>
                  <p className={s.name}>{type.name}</p>
                  <button>Add to order</button>
                  <ul>
                    <li>
                      <span>24 hours delivery guarantee</span>
                    </li>
                    <li>
                      <span>x20 HDR professional photos</span>
                    </li>
                    <li>
                      <span>24 hours delivery guarantee</span>
                    </li>
                  </ul>
                </div>

                <div className={s.preview}>
                  <p>Quick preview</p>
                </div>
              </div>
            );
          })}
          {/* <img className={s.slidLeft} src="/image/slideLeft.png" />
          <img className={s.slideRight} src="/image/slideRight.png" /> */}
        </div>
      </div>
      {/* <img className={s.slider} src="/image/slider.png" /> */}
    </div>
  );
};

export default AddSercices;
