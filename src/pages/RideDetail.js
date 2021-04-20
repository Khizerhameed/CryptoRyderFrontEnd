import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import * as Icons from "phosphor-react";
import Web3 from "web3";
import ReactStars from "react-rating-stars-component";
import config from "../config";
import { Link } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "../css/form.css";
import { object } from "prop-types";

let web3;
let accounts;
let authentication;
let rideShare;
let rideShareJson = require("../contracts/Rideshare.json");
const auth = require("../contracts/Authentication.json");

function RideDetail() {
  let history = useHistory();
  const { id } = useParams();

  const [RideData, setRideData] = useState([]);
  const [LoaderSpin, setLoader] = useState(true);
  async function metamaskConnection() {
    web3 = new Web3(window.ethereum);
    accounts = await web3.eth.getAccounts();
    await window.ethereum.enable();
    authentication = new web3.eth.Contract(auth.abi, config.Authentication);
    rideShare = new web3.eth.Contract(rideShareJson.abi, config.RideShare);

    try {
      let promiseArr;
      let promiseArr2;
      let driverName;
      try {
        promiseArr = await rideShare.methods.rides(id).call();

        let d = promiseArr.driver;
        promiseArr2 = await authentication.methods.getUserData(d).call();

        let name = promiseArr2.name;
        driverName = await authentication.methods.bytes32ToString(name).call();

        let covertedArrivalHours,
          convertedArrivalMinutes,
          convertedDepartureHours,
          convertedDepartureMinutes;
        var dA = parseInt(promiseArr.arrivaltime);
        var dAA = new Date(dA);
        var dD = parseInt(promiseArr.departureTime);
        var dDD = new Date(dD);
        if (dAA.getHours() > 0 && dAA.getHours() < 10) {
          covertedArrivalHours = "0" + dAA.getHours();
        } else {
          covertedArrivalHours = dAA.getHours();
        }
        if (dAA.getMinutes() > 0 && dAA.getMinutes() < 10) {
          convertedArrivalMinutes = "0" + dAA.getMinutes();
        } else {
          convertedArrivalMinutes = dAA.getMinutes();
        }
        if (dDD.getHours() > 0 && dDD.getHours() < 10) {
          convertedDepartureHours = "0" + dDD.getHours();
        } else {
          convertedDepartureHours = dDD.getHours();
        }
        if (dDD.getMinutes() > 0 && dDD.getMinutes() < 10) {
          convertedDepartureMinutes = "0" + dDD.getMinutes();
        } else {
          convertedDepartureMinutes = dDD.getMinutes();
        }
        let departureTime =
          convertedDepartureHours + ":" + convertedDepartureMinutes;
        let arrivalTime = covertedArrivalHours + ":" + convertedArrivalMinutes;

        let data = [];
        data.item = promiseArr;

        data.departureTime = departureTime;
        data.arrivalTime = arrivalTime;
        data.driverName = driverName;
        data.driverData = promiseArr2;
        setRideData(data);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    metamaskConnection();
  }, []);
  return (
    <>
      <div>
        <Header />
        <div className="relative">
          {/* Header */}
          <div
            className="relative  md:pt-32 pb-8 "
            style={{
              paddingTop: 200,
              backgroundImage:
                "url(https://cdn.blablacar.com/kairos/assets/build/images/carpool_only_large-1fb250954893109fa160f6fb41c3ef3d.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="px-4 text-center md:px-10 mx-auto w-full mb-12 ">
              <div>
                <h1 className="font-Lobster text-white sm:text-6xl">
                  Book a Ride?
                </h1>
              </div>
            </div>
          </div>
        </div>

        <section className="relative mt-40 ">
          {/* Section background (needs .relative class on parent and next sibling elements) */}

          <div className="absolute left-0 right-0 bottom-0 m-auto transform translate-y-1/2"></div>

          <div className="relative max-w-2xl mx-auto  sm:px-6">
            <div className="py-2 md:py-20">
              {/* Items */}
              <div className="  mx-3 grid gap-6 md:grid-cols-1 lg:grid-cols-1  md:max-w-2xl lg:max-w-none">
                {/* 1st item */}
                <div
                  style={{ backgroundColor: "blue", color: "white" }}
                  className=" p-5 relative flex flex-col py-5 rounded shadow-2xl "
                >
                  {/* First Line */}
                  <div className="text-center mb-5 text-3xl font-bold font-Lobster">
                    <span>Tuesday, 5 April</span>
                  </div>
                  <div className="  grid gap-6 grid-cols-12 border-b border-black">
                    <div className="col-span-2 mb-3 font-bold">
                      <p>15:15</p>
                      <p>15:15</p>
                    </div>
                    <div className="col-span-2 mt-2">
                      <Icons.Path size={68} className="-mt-2" />
                    </div>
                    <div className="col-span-3 font-bold">
                      <p>Montreal</p>
                      <p>Alcatnaz</p>
                    </div>
                    <div className="col-span-4 mt-3 text-right ">
                      <span className="text-base font-extrabold">1 ETH</span>
                    </div>
                  </div>

                  {/* Second Line */}
                  <div className=" mt-3 grid gap-6  grid-cols-12 border-b border-black">
                    <div className="col-span-10 ml-3 text-left mt-3 ">
                      <span className="text-sm font-extrabold text-black-1000">
                        Andrew
                      </span>
                      <ReactStars
                        count={5}
                        size={20}
                        edit={false}
                        activeColor="#ffd700"
                        value={3}
                      />
                    </div>

                    <div className="col-span-2 -ml-5 mt-2 mb-4">
                      <Icons.UserCircle size={48} />
                    </div>
                  </div>

                  {/* Third Line */}
                  <div className=" mt-3 grid gap-6  grid-cols-12 border-b border-black">
                    <div className="col-span-10 ml-3 text-left mt-3 ">
                      <span className="text-sm font-extrabold text-black-1000">
                        RENAULT DUSTER
                      </span>
                      <p>White</p>
                    </div>

                    <div className="col-span-2 -ml-5 mt-2 mb-4">
                      <Icons.Car size={48} />
                    </div>
                  </div>
                  <div className="text-center mt-20">
                    <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                      BOOK THIS RIDE
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default RideDetail;
