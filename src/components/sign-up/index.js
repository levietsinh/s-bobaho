import React from "react";
import BabahoInput from "../common/bobaho-input/BabahoInput";
import BobahoButton from "../common/bobaho-button/bobaho-button";
import styles from "./SignUp.module.scss";
import EntranceLayout from "../../layouts/entrance-layout/EntranceLayout";
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const [submittedForm, setSubmittedForm] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      identityNumber: "",
      email: "",
      phoneNumber: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      identityNumber: Yup.string()
        .required("Vui lòng nhập mật khẩu.")
        .matches(/^[0-9]{9}$|^[0-9]{12}$/, "Số CMND/CCCD không hợp lệ."),
      email: Yup.string()
        .required("Vui lòng nhập địa chỉ email.")
        .email("Email không hợp lệ."),
      phoneNumber: Yup.string()
        .required("Vui lòng nhập số điện thoại di dộng")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Số điện thoại di động không hợp lệ"
        ),
      password: Yup.string()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          "Mật khẩu phải ít nhất có 6 ký tự, ít nhất 1 chữ cái in hoa và 1 con sô"
        )
        .required("Vui lòng nhập mật khẩu."),
      passwordConfirmation: Yup.string()
        .required("Vui lòng nhập mật khẩu xác nhận.")
        .oneOf([Yup.ref("password")], "Mật khẩu xác nhận không trùng khớp."),
    }),
    onSubmit: (values) => {
      setSubmittedForm(true);
    },
  });
  return (
    <EntranceLayout>
      <div className={styles.welcome}>Trở thành một thành viên</div>
      <div className={styles.form}>
        {submittedForm ? (
          <div className={styles.submittedText}>Đăng ký thành công</div>
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <div style={{ marginBottom: 12 }}>
              <BabahoInput
                id="identityNumber"
                label="CMND/CCCD"
                placeholder="CMND/CCCD"
                value={formik.values.identityNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={formik.errors.identityNumber}
                touched={formik.touched.identityNumber}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <BabahoInput
                id="email"
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={formik.errors.email}
                touched={formik.touched.email}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <BabahoInput
                id="phoneNumber"
                label="Số điện thoại"
                placeholder="Số điện thoại"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={formik.errors.phoneNumber}
                touched={formik.touched.phoneNumber}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <BabahoInput
                id="password"
                label="Mật khẩu"
                placeholder="Mật khẩu"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                errors={formik.errors.password}
                touched={formik.touched.password}
              />
            </div>

            <BabahoInput
              id="passwordConfirmation"
              label="Xác nhận mật khẩu"
              placeholder="Xác nhận mật khẩu"
              type="password"
              value={formik.values.passwordConfirmation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              errors={formik.errors.passwordConfirmation}
              touched={formik.touched.passwordConfirmation}
            />
            <div className={styles.submitButton}>
              <BobahoButton name="Đăng ký" type="submit" />
            </div>
          </form>
        )}
        <Link
          className={styles.signUp}
          to={process.env.PUBLIC_URL + "/sign-in"}
        >
          {submittedForm ? "" : "Đã có tài khoản?"} Đăng nhập ngay.
        </Link>
      </div>
    </EntranceLayout>
  );
};
export default SignIn;
