import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserInformation.module.scss";

const UserInformation = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log("userInfo", userInfo);
  return (
    <div className={styles["user"]}>
      <div className={styles["user__avatar"]}>
        <img src="" alt="Avatar" />
      </div>
    </div>
  );
};

export default UserInformation;
