import React from "react";
import MobileTable from "./MobileTable";
import s from "./Table.module.css";

const Table = () => {
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
    <div>
      <table className={s.table}>
        <thead className={s.tableLeft}>
          {jobs.map((job, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={job.jobsLogo} />

                  {job.jobsName}
                  <img src="/image/warning.png" />
                </td>
              </tr>
            );
          })}
        </thead>
        <tbody className={s.tableRight}>
          <tr className={s.upLine}>
            <td className={s.usd}>
              <h4 className={s.usdSign}>
                <span>$</span>149
              </h4>

              <img src="/image/underUsd.png" />
              <p>Photography Slideshow Property Website </p>
              <img src="/image/check.png" />
              <div className={s.popular}>POPULAR</div>
            </td>
            <td className={`${s.usd} ${s.yellowLine}`}>
              <h4 className={s.usdSign}>
                <span>$</span>259
              </h4>
              <img src="/image/underUsd.png" />
              <p>Photography Cinematic Video Property Website </p>
              <img src="/image/checkWhite.png" />
              <div className={s.popular}>POPULAR</div>
            </td>
            <td className={s.usd}>
              <h4 className={s.usdSign}>
                <span>$</span>299
              </h4>
              <img src="/image/underUsd.png" />
              <p>Photography Matterport Slideshow Property Website </p>
              <img src="/image/check.png" />
            </td>
            <td className={s.usd}>
              <h4 className={s.usdSign}>
                <span>$</span>399
              </h4>
              <img src="/image/underUsd.png" />
              <p>Photography Matterport Cinematic Video Property Website </p>
              <img src="/image/check.png" />
              <div className={s.popular}>POPULAR</div>
            </td>
            <td className={s.usd}>
              <h4 className={s.usdSign}>
                <span>$</span>699
              </h4>
              <img src="/image/underUsd.png" />
              <p>ALL IN </p>
              <img src="/image/check.png" />
            </td>
          </tr>
          <tr className={s.checkClose}>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
            <td className={`${s.check} ${s.yellow}`}>
              <img src="/image/checkWhite.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
          </tr>
          <tr className={s.checkClose}>
            <td className={s.check}>
              <img src="/image/close.png" />
            </td>
            <td className={`${s.check} ${s.yellow}`}>
              <img src="/image/checkWhite.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
          </tr>
          <tr className={s.checkClose}>
            <td className={s.check}>
              <img src="/image/close.png" />
            </td>
            <td className={`${s.check} ${s.yellow}`}>
              <img src="/image/close.png" />
            </td>
            <td className={s.check}>
              <img src="/image/close.png" />
            </td>
            <td className={s.check}>
              <img src="/image/close.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
          </tr>
          <tr className={s.checkClose}>
            <td className={s.check}>
              <img src="/image/close.png" />
            </td>
            <td className={`${s.check} ${s.yellow}`}>
              <img src="/image/close.png" />
            </td>
            <td className={s.check}>
              <img src="/image/close.png" />
            </td>
            <td className={s.check}>
              <img src="/image/close.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
          </tr>
          <tr className={s.checkClose}>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
            <td className={`${s.check} ${s.yellow}`}>
              <img src="/image/close.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
            <td className={s.check}>
              <img src="/image/close.png" />
            </td>
            <td className={s.check}>
              <img src="/image/check.png" />
            </td>
          </tr>
          <tr className={s.addLine}>
            <td className={s.add}>
              <img src="/image/check.png" />
              <button>
                <img src="/image/buttonCart.png" /> Add
              </button>
            </td>
            <td className={`${s.add} ${s.yellow}`}>
              <img src="/image/checkWhite.png" />
              <button>
                <img src="/image/whiteCart.png" /> Added
              </button>
            </td>
            <td className={s.add}>
              <img src="/image/check.png" />
              <button>
                <img src="/image/buttonCart.png" /> Add
              </button>
            </td>
            <td className={s.add}>
              <img src="/image/check.png" />
              <button>
                <img src="/image/buttonCart.png" /> Add
              </button>
            </td>
            <td className={s.add}>
              <img src="/image/check.png" />
              <button>
                <img src="/image/buttonCart.png" /> Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={s.mobileTables}>
        <div className={s.mobileTable}>
          <MobileTable />
          <MobileTable />
          <MobileTable />
          <MobileTable />
          <MobileTable />
          <MobileTable />
        </div>
      </div>
    </div>
  );
};

export default Table;
