import React from "react";
import { useSelector } from "react-redux";
import styles from "./UserInformation.module.scss";

const UserInformation = () => {
  const { photoURL, displayName, email, phoneNumber } = useSelector(
    (state) => state.user.userInfo
  );
  return (
    <div className={styles["user"]}>
      <div className={styles["user__avatar"]}>
        <img src={photoURL || ""} alt="Avatar" />
      </div>
      <h2 className={styles["user__name"]}>{displayName}</h2>
      <div className={styles["user__email"]}>{email}</div>
      <div className={styles["user__phone"]}>{phoneNumber}</div>
    </div>
  );
};

export default UserInformation;
