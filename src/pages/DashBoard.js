import React, { useEffect, useState } from "react";

import "./AdminDashBoard.css";
import SideBarNav from "../component/SideBarNav";
import { cdata } from "../data/PropertyCardData.js";
import PropertyAndCleanerCard from "../component/PropertyAndCleanerCard";
import "chart.js/auto";
import PropertyDetailCard from "../component/PropertyDetailCard";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import TopNavBar from "../component/TopNavBar";
import { topCleaner } from "../data/TopCleaner.js";
import { topProperty } from "../data/TopCleaner.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const options = {
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "GRAPH",
    },
  },
};

const data = {
  labels: [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Oct",
    "Nov",
    "Dec",
  ],

  datasets: [
    {
      label: "Property View",
      data: [10, 20, 30, 42, 51, 82, 31, 59, 61, 73, 91, 58],
      backgroundColor: "#EFEFEF",
      borderColor: "#DBDBDB",
      tension: 0.4,
      fill: true,
      pointStyle: "rect",
      pointBackgroundColor: "#fff",
      showLine: true,
    },
  ],
};

const DashBoard = () => {
  return (
    <>
      
      <div className="main-dashBoard-scroll-container">
        <div className="PropertyDetailCard-container">
          {cdata.map((e) => {
            return (
              <PropertyDetailCard
                key={e.id}
                heading={e.heading}
                total={e.total}
                active={e.active}
                inActive={e.inActive}
              />
            );
          })}
        </div>
        <div className="graph-container">
          <Line data={data} options={options} height={"69px"} />
        </div>
        <h2 style={{ fontFamily: "'Poppins" }}>Top Property</h2>
        <div className="property-img-card-container">
          {topProperty.map((e) => {
            return (
              <PropertyAndCleanerCard
                key={e.id}
                detail={e.detail}
                imgLink={e.imgLInk}
                name={e.name}
                views={e.views}
                ownerName={e.ownerName}
              />
            );
          })}
        </div>
        <h2 style={{ fontFamily: "'Poppins" }}>Top Cleaner</h2>
        <div className="property-img-card-container">
          {topCleaner.map((e) => {
            return (
              <PropertyAndCleanerCard
                key={e.id}
                detail={e.detail}
                imgLink={e.imgLInk}
                name={e.name}
                views={e.views}
                ownerName={e.ownerName}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DashBoard;
