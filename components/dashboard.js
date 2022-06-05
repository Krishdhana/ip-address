import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import NavBar from "./navbar";
import FullScreenLoading from "./fullscreen-loading";

const Dashboard = (props) => {
  return (
    <>
      <NavBar></NavBar>
      <div
        className={`vw-100 d-flex justify-content-center align-items-center ${styles["body-sizing"]}`}
      >
        <div className={`${styles.card} px-3 py-4 text-center`}>
          <div className="row">
            <div>
              <div className="mt-2 fs-2 fw-bold">{props.data.IPv4}</div>
              <div className="fw-bold">IP Address</div>
            </div>
            <div className="mt-3">
              <div className="mt-2 fs-2 fw-bold">
                {props.data.city?.toUpperCase()}
              </div>
              <div className="fw-bold">City</div>
            </div>
            <div className="mt-3">
              <div className="mt-2 fs-2 fw-bold">
                {props.data.country_name?.toUpperCase()}
              </div>
              <div className="fw-bold">Country</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
