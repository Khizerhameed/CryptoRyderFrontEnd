import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

import "./css/style.scss";
import "./App.css";
import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import OfferRide from "./pages/OfferRide";
import RideDetail from "./pages/RideDetail";
import MyRides from "./pages/MyRides";
import MyDriver from "./pages/MyDriver";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/search" exact component={Search} />
        <Route path="/offerride" exact component={OfferRide} />
        <Route path="/ridedetail/:id" exact component={RideDetail} />
        <Route path="/myrides" exact component={MyRides} />
        <Route path="/mydriver" exact component={MyDriver} />

        {!localStorage.getItem("walletAddress") ? (
          <>
            <Redirect from="*" exact to="/signin" />
          </>
        ) : (
          <>
            <Redirect from="*" to="/search" />
          </>
        )}
      </Switch>
    </>
  );
}

export default App;
