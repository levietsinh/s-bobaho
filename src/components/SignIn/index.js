import React from "react"

import { makeStyles } from "@mui/styles"
import BabahoInput from "../common/BobahoInput"
import BobahoButton from '../common/BobahoButton'
import styles from './SignIn.module.scss'
import EntranceLayout from "../../layouts/EntranceLayout"
import { Link, useHistory } from "react-router-dom"

import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useCookies } from 'react-cookie'

const useStyles = makeStyles({
  welcome: {
    fontSize: 32,
    fontWeight: 700,
    color: '#fff',
    marginBottom: 24
  }
})
const SignIn = () => {
  const history = useHistory()
  const classes = useStyles()
  const [, setCookie] = useCookies()
  const formik = useFormik({
    initialValues: {
      identityNumber: '205797324',
      password: 'Bobaho123'
    },
    validationSchema: Yup.object({
      identityNumber: Yup.string()
        .matches(/^[0-9]{9}$|^[0-9]{12}$/, 'Số CMND/CCCD sai định dạng.')
        .required('Bạn cần nhập số CMND/CCCD.'),
      password: Yup.string()
        .required('Vui lòng nhập mật khẩu.')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, 'Mật khẩu phải ít nhất có 6 ký tự, ít nhất 1 chữ cái in hoa và 1 con sô')
    }),
    onSubmit: values => {
      setCookie('user', values, { path: '/' })
      history.push(`${process.env.PUBLIC_URL}/`)
    }
  })
  return (
    <EntranceLayout>
      <div className={classes.welcome}>Welcome</div>
      <div className={styles.form}>
        <form onSubmit={formik.handleSubmit}>
          <div style={{marginBottom: 16}}>
            <BabahoInput
              id="identityNumber"
              label="CMND/CCCD"
              placeholder="CMND/CCCD"
              value={formik.values.identityNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.identityNumber && formik.touched.identityNumber && (
              <p className="errorText">{formik.errors.identityNumber}</p>
            )}
          </div>
          
          <BabahoInput
            id="password"
            label="Mật khẩu"
            placeholder="Mật khẩu"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="errorText">{formik.errors.password}</p>
          )}
          <div className={styles.forgotPassword}>
            <Link to={process.env.PUBLIC_URL + '/forgot-password'}>
              Quên mật khẩu?
            </Link>
          </div>
          <div className={styles.submitButton}>
            <BobahoButton name="Đăng nhập" type="submit"/>
          </div>
        </form>
        <Link className={styles.signUp} to={process.env.PUBLIC_URL + '/sign-up'}>Chưa có tài khoản? Đăng ký ngay.</Link>
      </div>
    </EntranceLayout>
  )
}
export default SignIn