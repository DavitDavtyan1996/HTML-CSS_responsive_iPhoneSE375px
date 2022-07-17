import React from "react";
import s from "./Table.module.css";

const MobileTable = () => {
  const jobs = [
    {
      jobsLogo: "/image/hdrPhoto.png",
      jobsName: "HDR Photo (/ qty.)",

      isChecked: true,
    },
    {
      jobsLogo: "/image/cinematicVideo.png",
      jobsName: "Cinematic Video",

      isChecked: false,
    },
    {
      jobsLogo: "/image/3dScan.png",
      jobsName: "3D Matterport Scan",

      isChecked: true,
    },
    {
      jobsLogo: "/image/dronePhoto.png",
      jobsName: "Drone Photo/Video",

      isChecked: false,
    },
    {
      jobsLogo: "/image/slideshow.png",
      jobsName: "Slideshow",

      isChecked: true,
    },
    {
      jobsLogo: "/image/instagram.png",
      jobsName: "Instagram teaser",

      isChecked: false,
    },
    {
      jobsLogo: "/image/website.png",
      jobsName: "Website",

      isChecked: true,
    },
  ];

  return (
    <div className={s.colum}>
      <div className={s.columHeader}>
        Photography Slideshow Property Website
      </div>
      <div className={s.columBody}>
        {jobs.map((job, index) => {
          return (
            <div className={s.columJob} key={index}>
              <p>{job.jobsName}</p>
              <div className={s.columJobImg}>
                <img src="/image/warning.png" />
                <img
                  src={job.isChecked ? "/image/check.png" : "/image/close.png"}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={s.footer}>
        <button>
          <img src="/image/buttonCart.png" />
        </button>
      </div>
    </div>
  );
};

export default MobileTable;
