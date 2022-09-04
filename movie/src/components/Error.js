import React from "react";
import { Link } from "react-router-dom";
import notfound from "./image/notfound.png";
import styles from "./css/Single.module.css";

const Error = () => {
  return (
    <div>
      <h1 className={styles.red}>I think you are on wrong page</h1>
      <h3>Please click the button below to Redirect to Home page</h3>
      <Link to={"/"}>
        <button className={styles.backToHome}>Back to Home</button>
      </Link>
      <div className={styles.notfound}>
        <img src={notfound} alt="Not found" />
      </div>
    </div>
  );
};

export default Error;
