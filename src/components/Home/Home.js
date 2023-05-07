import React from "react";
import Header from "../partials/Header/Header";
import BackgroundWave from "../../images/main-wave.png";
import TheEarthImg from "../../images/earth-img.png";
import GrownImg from "../../images/premium-quality.png";
import WelcomeImg from "../../images/undraw.png";
import styles from "./home.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.home}>
        <img src={BackgroundWave} className={styles.home__background} alt="" />
        <img src={TheEarthImg} className={styles.home__earthImg} alt="" />
        <div className={styles.home__heading}>
          <h2 className={styles.home__headingH2}>Chào mừng đến với S-BOBAHO</h2>
          <p className={styles.home__headingP}>
            <img
              src={GrownImg}
              alt="Grown"
              className={styles.home__headingGrown}
            />
            Hệ thống cho vay, buôn bán đồ quá hạn hàng đầu Việt Nam
          </p>
          <Button
            variant="contained"
            className={"primaryButton"}
            component={Link}
            to={`${process.env.PUBLIC_URL}/sign-in`}
          >
            Mua sắm ngay
          </Button>
        </div>
      </div>
      <div className={styles.welcome}>
        <div className={styles.welcome__heading}>Welcome</div>
        <div className={styles.welcome__subtext}>
          <p>Muốn có nguồn vốn để startup ? Hãy đến ngay với S-BoBaHo</p>
          <p>Đem đến chất lượng tuyệt nhất cho khách hàng.</p>
          <p>
            Với mức lãi suất hấp dẫn, khách hàng có thể tự tin về việc sợ tiền
            lãi quá cao{" "}
          </p>
        </div>
        <div>
          <Button
            variant="contained"
            className={"primaryButton"}
            component={Link}
            to={`${process.env.PUBLIC_URL}/`}
          >
            Cầm đi sợ chi!
          </Button>
        </div>
        <img src={WelcomeImg} alt="" />
      </div>
    </div>
  );
};
export default Home;
