import React from "react";
import OurWork from "./OurWork";
import s from "./Work.module.css";

const Work = () => {
  const workTypes = [
    {
      imgUrl: "/image/drone.png",
      workName: "DRONE (TRANSPORT CANADA LICENCED)",
    },
    {
      imgUrl: "/image/video.png",
      workName: "REAL ESTATE CINEMATIC VIDEO",
    },
    {
      imgUrl: "/image/photo.png",
      workName: "STILL PHOTOGRAPHY       ",
    },
    {
      imgUrl: "/image/agent.png",
      workName: "AGENT VIDEO PRESENTATION",
    },
    {
      imgUrl: "/image/social.png",
      workName: "SOCIAL MEDIA CONTENT PRODUCTION",
    },
    {
      imgUrl: "/image/slide.png",
      workName: "VIRTUAL SLIDESHOW TOUR",
    },
    {
      imgUrl: "/image/plan.png",
      workName: "FLOOR PLANS",
    },
  ];

  return (
    <div className={s.work}>
      <div className={s.workNav}>
        <img className={s.arrUP} src="/image/arrUp.png" />
        <img className={s.arrLine} src="/image/arrLine.png" />
        {workTypes.map((workType, i) => {
          return (
            <div key={i} className={s.workType}>
              <div className={s.bColor}>
                <img className={s.imgUrl} src={workType.imgUrl} />
              </div>
              <h4>{workType.workName}</h4>
              <img className={s.arrLine} src="/image/arrLine.png" />
            </div>
          );
        })}

        <img className={s.arrDown} src="/image/arrDown.png" />
      </div>
      <div className={s.workcontent}>
        <OurWork />
      </div>
    </div>
  );
};

export default Work;
