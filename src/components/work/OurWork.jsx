import React from "react";
import s from "./OurWork.module.css";

const OurWork = () => {
  const images = [
    { url: "/image/img1.png", id: 1 },
    { url: "/image/img2.png", id: 2 },
    { url: "/image/img3.png", id: 3 },
    { url: "/image/img5.png", id: 5 },
    { url: "/image/img4.png", id: 8 },
    { url: "/image/img6.png", id: 6 },
    { url: "/image/img7.png", id: 7 },
  ];

  const sortCategories = [
    { img: "/image/all.png", categoryName: "All" },
    { img: "/image/detached.png", categoryName: "Detached" },
    { img: "/image/semidetached.png", categoryName: "Semi detached" },
    { img: "/image/condo.png", categoryName: "Condo(hover)" },
    { img: "/image/estate.png", categoryName: "Estates" },
    { img: "/image/luxury.png", categoryName: "Luxury" },
    { img: "/image/modern.png", categoryName: "Modern" },
    { img: "/image/traditional.png", categoryName: "Traditional" },
    { img: "/image/classic.png", categoryName: "Classic" },
  ];

  return (
    <div className={s.ourWork}>
      <h2>OUR WORK</h2>
      <div className={s.sort}>
        <p>Filter by</p>
        {sortCategories.map((category, i) => {
          return (
            <button key={i}>
              <img src={category.img} />
              <p>{category.categoryName}</p>
            </button>
          );
        })}
        <p className={s.close}>
          <img src="/image/x.png" /> Clear
        </p>
      </div>
      <div className={s.contentVideo}>
        <div className={s.description}>
          <p>
            Starting <span>99 $</span>
          </p>
          <h3>
            REAL ESTATE{" "}
            <span>
              <br />
            </span>
            CINEMATIC VIDEO
          </h3>
          <p className={s.about}>
            Video is THE most effective content type in today's digital
            marketing environment. We offer a truly CUSTOM Video production for
            Real Estate, from music selection to editing style, every detail
            will be created to best showcase your property. On average, 2 -4
            min, dynamic Cinematic Experience is THE most effective way to
            create strong engagement and generate leads. Delivery: NEXT DAY.
          </p>
          <div className={s.orderButtons}>
            <button className={s.orderNow}>Order now</button>
            <button>
              <img src="/image/miniPlay.png" /> How it works
            </button>
          </div>
        </div>
        <div className={s.video}>
          <div>
            <img className={s.videoPicture} src="/image/house.jpg" />
            <img className={s.play} src="/image/play.png" />
            <img className={s.left} src="/image/arrLeft.png" />
            <img className={s.right} src="/image/arrRight.png" />
          </div>
          <div className={s.images}>
            <div className={s.arrs}>
              <img src="/image/imgArrR.png" />
              <img src="/image/imgArrL.png" />
            </div>
            {images.map((image) => {
              return (
                <img
                  key={image.id}
                  className={image.id === 2 ? `${s.image2}` : `${s.image}`}
                  src={image.url}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
