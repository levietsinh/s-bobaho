import React from "react";
import styles from "./Account.module.scss";
import UserInformation from "./user/UserInformation";

const Account = () => {
  return (
    <div className={styles["account"]}>
      <div className={styles["account__sidebar"]}>
        <ul>
          <li className={styles["active"]}>
            <span>Tài khoản</span>
          </li>
          <li>
            <span>Hợp đồng</span>
          </li>
          <li>
            <span>Đơn gia hạn</span>
          </li>
          <li>
            <span>Đơn hàng</span>
          </li>
        </ul>
      </div>
      <div className={styles["account__content"]}>
        <UserInformation />
      </div>
    </div>
  );
};

export default Account;
