import React from "react";
import BabahoInput from "../common/BobahoInput";
import BobahoButton from '../common/BobahoButton'
import styles from './ForgotPassword.module.scss'
import EntranceLayout from "../../layouts/EntranceLayout";
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <EntranceLayout>
      <div className={styles.welcome}>Lấy lại mật khẩu</div>
      <div className={styles.form}>
        <div style={{marginBottom: 12}}>
          <BabahoInput
            id="cmnd"
            label="CMND/CCCD"
            placeholder="CMND/CCCD"
          />
        </div>
        <div style={{marginBottom: 16}}>
          <BabahoInput
            id="email"
            label="Email"
            placeholder="Email"
          />
        </div>
        <div className={styles.submitButton}>
          <BobahoButton name="Lấy lại mật khẩu"/>
        </div>
        <Link className={styles.signIn} to={process.env.PUBLIC_URL + '/sign-in'}>
          Đã nhớ mật khẩu? Đăng nhập ngay.
        </Link>
      </div>
    </EntranceLayout>
  )
}
export default ForgotPassword