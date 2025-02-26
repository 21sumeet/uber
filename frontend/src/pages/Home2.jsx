import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home2 = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const PanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(PanelRef.current, {
        height: "70%",
        duration: 0.5,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(PanelRef.current, {
        height: "0",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  return (
    <div className="h-screen w-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* temporary image */}
        <img
          className="h-full w-full object-fill"
          src="https://i0.wp.com/www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png?fit=493%2C383&ssl=1"
        />
      </div>

      <div className=" flex flex-col justify-end absolute h-screen w-full top-0">
        <div className="bg-white p-4 h-[30%]">
          <h5
            onClick={() => {
              setpanelOpen(false);
            }}
            ref={panelCloseRef}
            className="absolute opacity-0 right-6 top-4 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold text-center">
            Find your trip{" "}
          </h4>
          <from onsubmit={(e) => submitHandler(e)}>
            <input
              onClick={() => setpanelOpen(true)}
              value={pickup}
              onChange={(e) => setpickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 mt-7 text-lg rounded-lg w-full"
              type="text"
              placeholder="Enter your location"
            />
            <input
              onClick={() => setpanelOpen(true)}
              value={destination}
              onChange={(e) => setdestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </from>
        </div>
        <div ref={PanelRef} className="bg-red-400 h-[0]">
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
};

export default Home2;
