import { Router, Route, Switch, Redirect, useHistory } from "react-router-dom";
import Home from "./components/Home/index";
import SignIn from "./components/SignIn/index";
import SignUp from "./components/SignUp/index";
import ForgotPassword from "./components/ForgotPassword/index";
import Welcome from "./components/Welcome/index";
import { withStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import { withCookies, useCookies } from "react-cookie";

import { useSelector } from "react-redux";

import "@fontsource/montserrat";
import AccountPage from "./pages/account/AccountPage";
function App() {
  const history = useHistory();
  const GlobalCss = withStyles({
    "@global": {
      "html, body": {
        margin: 0,
        padding: 0,
      },
      ".mainBackground": {
        background: "#fff",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(to right, #15AC81 , #074332)",
      },
      ".primaryButton": {
        color: "#fff!important",
        textTransform: "unset!important",
        background: "#3F3D56!important",
        borderRadius: "unset!important",
        fontSize: "14px!important",
        fontWeight: "700!important",
        fontFamily: "Montserrat!important",
        padding: "12px!important",
      },
      ".primaryTextFiled": {
        fontFamily: "Montserrat",
        backgroundColor: "#fff",
        borderRadius: 8,
      },
      ".primaryInputLabel": {
        fontWeight: "600!important",
        "&.Mui-focused": {
          color: "#666!important",
          fontSize: 14,
        },
      },
      ".primaryInput": {
        backgroundColor: "#fff!important",
        "& input": {
          "&::before": { border: "unset" },
          "&::after": {
            border: "unset",
          },
        },
      },
      ".primaryInputFocused": {},
    },
  })(() => null);

  const userInfo = useSelector((state) => state.user.userInfo);
  console.log("userInfo App", userInfo);

  useEffect(() => {
    if (!userInfo) history.push(`${process.env.PUBLIC_URL}/sign-in`);
  }, [history, userInfo]);

  return (
    <GlobalStyles>
      <div className="App" style={{ fontFamily: "Montserrat" }}>
        <GlobalCss />
        <Router history={history}>
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} exact>
              {!userInfo ? (
                <Redirect to={process.env.PUBLIC_URL + "/welcome"} />
              ) : (
                <Home />
              )}
            </Route>
            <Route
              path={`${process.env.PUBLIC_URL}/sign-in`}
              component={SignIn}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/sign-up`}
              component={SignUp}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/forgot-password`}
              component={ForgotPassword}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/welcome`}
              component={Welcome}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/account`}
              component={AccountPage}
            />
          </Switch>
        </Router>
      </div>
    </GlobalStyles>
  );
}

export default withCookies(App);
