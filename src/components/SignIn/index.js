import React from "react";
import { makeStyles } from "@mui/styles";
import BabahoInput from "../common/BobahoInput";
import BobahoButton from '../common/BobahoButton'
import styles from './SignIn.module.scss'
import EntranceLayout from "../../layouts/EntranceLayout";
import { Link } from "react-router-dom";

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
  }
})
const SignIn = () => {
  const classes = useStyles()
  return (
    <EntranceLayout>
      <div className={classes.welcome}>Welcome</div>
      <div className={classes.form}>
        <div style={{marginBottom: 16}}>
          <BabahoInput
            id="cmnd"
            label="CMND/CCCD"
            placeholder="CMND/CCCD"
          />
        </div>
        
        <BabahoInput
          id="password"
          label="Mật khẩu"
          placeholder="Mật khẩu"
          type="password"
        />
        <div className={styles.forgotPassword}>Quên mật khẩu?</div>
        <div className={styles.submitButton}>
          <BobahoButton name="Đăng nhập"/>
        </div>
        <Link className={styles.signUp} to={process.env.PUBLIC_URL + '/sign-up'}>Chưa có tài khoản? Đăng ký ngay.</Link>
      </div>
    </EntranceLayout>
  )
}
export default SignIn