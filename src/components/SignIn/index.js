import React from "react";
import BabahoInput from "../common/BobahoInput";
import BobahoButton from "../common/BobahoButton";
import styles from "./SignIn.module.scss";
import EntranceLayout from "../../layouts/entrance-layout/EntranceLayout";
import { Link, useHistory } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

import {
  signInWithPopup,
  FacebookAuthProvider,
  auth,
} from "../../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../store/UserReducer";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const formik = useFormik({
    initialValues: {
      identityNumber: "205797324",
      password: "Bobaho123",
    },
    validationSchema: Yup.object({
      identityNumber: Yup.string()
        .matches(/^[0-9]{9}$|^[0-9]{12}$/, "Số CMND/CCCD sai định dạng.")
        .required("Bạn cần nhập số CMND/CCCD."),
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu.")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
          "Mật khẩu phải ít nhất có 6 ký tự, ít nhất 1 chữ cái in hoa và 1 con sô"
        ),
    }),
    onSubmit: (values) => {
      history.push(`${process.env.PUBLIC_URL}/`);
    },
  });

  const facebookProvider = new FacebookAuthProvider();
  const handleLoginFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        dispatch(updateUserInfo(user));
        console.log("user", user);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log("accessToken", accessToken);
        if (result && accessToken) history.push(`${process.env.PUBLIC_URL}/`);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = FacebookAuthProvider.credentialFromError(error);
        // ...
      });
  };
  useEffect(() => {
    if (userInfo) history.push(process.env.PUBLIC_URL);
  }, []);

  return (
    <EntranceLayout>
      <div className={styles.welcome}>Welcome</div>
      <div className={styles.form}>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <BabahoInput
              id="identityNumber"
              label="CMND/CCCD"
              placeholder="CMND/CCCD"
              value={formik.values.identityNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={true}
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
            disabled={true}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="errorText">{formik.errors.password}</p>
          )}
          <div className={styles.forgotPassword}>
            <Link to={process.env.PUBLIC_URL + "/forgot-password"}>
              Quên mật khẩu?
            </Link>
          </div>
          <div className={styles.submitButton}>
            <BobahoButton name="Đăng nhập" type="submit" disabled />
          </div>
        </form>
        <div className={styles["signin__auth2"]}>
          <p>Hoặc đăng nhập bằng</p>
          <div className={styles["signin__auth2-buttons"]}>
            <BobahoButton name="Google" />
            <BobahoButton name="Facebook" onClick={handleLoginFacebook} />
          </div>
        </div>
        <Link
          className={styles.signUp}
          to={process.env.PUBLIC_URL + "/sign-up"}
        >
          Chưa có tài khoản? Đăng ký ngay.
        </Link>
      </div>
    </EntranceLayout>
  );
};
export default SignIn;
