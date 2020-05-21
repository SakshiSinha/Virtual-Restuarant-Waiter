import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePageBg.module.css";

const HomePageBg = () => {
  return (
    <div className={`${styles.backImg} container-fluid`}>
      <div className="row">
        <div className="col text-white text-center">
          <h1 className="display-4 font-weight-bold">season the moment</h1>
          <div className="lead">
            Unexpected flavors forged from nature and mingled with flourish
          </div>
          <Link to="/reservation">
            <button type="button" className="mt-3 btn btn-lg btn-dark">
              CLICK HERE TO MAKE RESERVATIONS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageBg;
