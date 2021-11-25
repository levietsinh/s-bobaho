import React from "react";
import { makeStyles } from "@mui/styles";
import BabahoInput from "../common/BobahoInput";
import BobahoButton from '../common/BobahoButton'
import styles from './SignUp.module.scss'
import EntranceLayout from "../../layouts/EntranceLayout";
import { Link } from 'react-router-dom'
import clsx from 'clsx'
const useStyles = makeStyles({
  welcome: {
    fontSize: 32,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 24
  },
  form: {
    width: 380,
    backgroundColor: '#008664',
    padding: '24px 40px',
    borderRadius: 40,
    boxShadow: '0px 3px 10px #ffffff17'
  },

})
const SignIn = () => {
  const classes = useStyles()
  return (
    <EntranceLayout>
      <div className={classes.welcome}>Trở thành một thành viên</div>
      <div className={clsx(classes.form, styles.form)}>
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