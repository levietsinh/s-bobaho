import React from "react";
import BabahoInput from "../common/BobahoInput";
import BobahoButton from '../common/BobahoButton'
import styles from './ForgotPassword.module.scss'
import EntranceLayout from "../../layouts/EntranceLayout";
import { Link } from 'react-router-dom'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const ForgotPassword = () => {
  const [submittedForm, setSubmitted] = React.useState(false)
  const formik = useFormik({
    initialValues: {
      identityNumber: '',
      email: ''
    },
    validationSchema: Yup.object({
      identityNumber: Yup.string()
        .required('Vui lòng nhập số CMND/CDCC.')
        .matches(/^[0-9]{9}$|^[0-9]{12}$/, 'Số CMND/CCCD sai định dạng.'),
      email: Yup.string()
        .required('Vui lòng nhập email.')
        .email('Email không đúng định dạng.')
    }),
    onSubmit: values => {
      setSubmitted(true)
    }
  })
  return (
    <EntranceLayout>
      <div className={styles.welcome}>Lấy lại mật khẩu</div>
      <div className={styles.form}>
      {submittedForm ?
        <div className={styles.submittedText}>Mật khẩu mới đã được gởi về <span>{formik.values.email}</span></div>
        :
        <form onSubmit={formik.handleSubmit}>
          <div style={{marginBottom: 12}}>
            <BabahoInput
              id="identityNumber"
              label="CMND/CCCD"
              placeholder="CMND/CCCD"
              value={formik.values.identityNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.identityNumber && formik.touched.identityNumber && 
              <p className="errorText">{formik.errors.identityNumber}</p>
            }
          </div>
          <div style={{marginBottom: 16}}>
            <BabahoInput
              id="email"
              label="Email"
              placeholder="example@s-bobaho.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            { formik.errors.email && formik.touched.email && 
              <p className="errorText">{ formik.errors.email }</p>
            }
          </div>
          <div className={styles.submitButton}>
            <BobahoButton name="Lấy lại mật khẩu" onClick={formik.handleSubmit}/>
          </div>
        </form>
      }
      <Link className={styles.signIn} to={process.env.PUBLIC_URL + '/sign-in'}>
        {!submittedForm && 'Đã nhớ mật khẩu?'} Đăng nhập ngay.
      </Link>
      </div>
    </EntranceLayout>
  )
}
export default ForgotPassword