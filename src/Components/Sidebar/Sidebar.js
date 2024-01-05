import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import nirantara from "../../utils/nirantaralogo.png";
import dashboardlogo from "../../utils/dashboardlogo.png";
import triplogo from "../../utils/triplogo.png";
import location from "../../utils/locationlogo.png";
import vehicle from "../../utils/vehiclelogo.png";
import fuel from "../../utils/fuellogo.png";
import co2 from "../../utils/co2logo.png";
import permission from "../../utils/permissionlogo.png";
import support from "../../utils/Supportlogo.png";
import documentation from "../../utils/Documentationlogo.png";
import arrowright from "../../utils/arrowright.png";

// const Sidebar = ({ setActiveButton }) => {
const Sidebar = ({ setActiveButton }) => {
  const lc = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const buttons = [
    "Dashboard",
    "Trips",
    "Location Master",
    "Vehicle Master",
    "Fuel Master",
    "CO2 Calculator",
    "Rolls & Permissions",
    "Support",
    "Documentation",
  ];
  const routes = [
    "/Dashboard",
    "/trips",
    "/locationmaster",
    "/VehicleMaster",
    "/fuelmaster",
    "/co2calculatorpage",
    "/rollsandpermission",
    "/SupportPage",
    "/Documentation"
  ];
  const images = [
    dashboardlogo,
    triplogo,
    location,
    vehicle,
    fuel,
    co2,
    permission,
    support,
    documentation,
  ];

  const handleButtonClick = (index) => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`sidebar ${isSidebarOpen ? "open" : ""}`}
      style={{ backgroundColor: "#fff" }}
    >
      <div className="logo" onClick={toggleSidebar}>
        <img src={nirantara} alt="Nirantara Logo" />
      </div>
      <ul>
        {buttons.map((button, index) => (
          <Link
            style={{ color: "#6F6B7D", textDecoration: "none" }}
            to={routes[index]}
            onClick={() => handleButtonClick(index)}
            key={index}
          >
            <li
              style={{ display: "flex", alignItems: "center" }}
              className={lc.pathname === routes[index] ? "active" : ""}
            >
              <img
                src={images[index]}
                alt="Nirantara Logo"
                style={{ marginRight: "10px" }}
              />

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <>{button}</>

                <span>
                  <img src={arrowright} alt="Arrow Right" />
                </span>
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
