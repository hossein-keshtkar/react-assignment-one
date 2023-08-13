import React from "react";

import styles from "../styles/Card.module.css";

const Card = ({ children }) => {
  return (
    <div className={styles.container} id="quote-box">
      {children}
    </div>
  );
};

export default Card;
