import React from "react";
import Header from "../../components/partials/Header";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles["main-layout"]}>
      <Header />
      <div className={styles["main-layout__content"]}>{children}</div>
    </div>
  );
};

export default MainLayout;
