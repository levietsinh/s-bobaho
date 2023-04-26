import clsx from "clsx";
import React from "react";
import styles from "./EntranceLayout.module.scss";

const EntranceLayout = ({ children }) => {
  return (
    <div className="mainBackground">
      <div className={clsx(styles["entrance-layout"], "container")}>
        {children}
      </div>
    </div>
  );
};
export default EntranceLayout;
