import React from "react";
import CardSocialTraffic from "../components/CardSocialTraffic";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { makeStyles } from "@material-ui/core/styles";
import * as Icons from "phosphor-react";
import ReactStars from "react-rating-stars-component";

import "../css/form.css";

function MyRides() {
  function timeCheck(e) {
    console.log(e.target.value);
  }
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
                  My Rides
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
                      <p>15:40</p>
                      <p>15:40</p>
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
                  <div className=" text-right mt-20">
                    <button className="btn btn-danger ">Cancel</button>
                    <button className="btn btn-success ml-3 py-2 px-5 ">Driver Met</button>
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

export default MyRides;
