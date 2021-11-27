import React from "react";
import BabahoInput from "../common/BobahoInput";
import BobahoButton from '../common/BobahoButton'
import styles from './SignUp.module.scss'
import EntranceLayout from "../../layouts/EntranceLayout";
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <EntranceLayout>
      <div className={styles.welcome}>Trở thành một thành viên</div>
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
        <div style={{marginBottom: 16}}>
          <BabahoInput
            id="phoneNumber"
            label="Số điện thoại"
            placeholder="Số điện thoại"
          />
        </div>
        <div style={{marginBottom: 16}}>
          <BabahoInput
            id="password"
            label="Mật khẩu"
            placeholder="Mật khẩu"
            type="password"
          />
        </div>
        
        <BabahoInput
          id="confirmPassword"
          label="Xác nhận mật khẩu"
          placeholder="Xác nhận mật khẩu"
          type="password"
        />
        <div className={styles.submitButton}>
          <BobahoButton name="Đăng ký"/>
        </div>
        <Link className={styles.signUp} to={process.env.PUBLIC_URL + '/sign-in'}>
          Đã có tài khoản? Đăng nhập ngay.
        </Link>
      </div>
    </EntranceLayout>
  )
}
export default SignIn