import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar"; // Assuming the correct path to your Sidebar component
import VehicleMasterTable from "./VehicleMasterTable";
import Header from "../../Components/Header/Header";
import axios from "axios";

const LocationMaster = () => {
  const [data, setData] = useState([]);
  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const tableStyle = {
    width: "70%",
  };

  const headerstyle = {
    width: "100%",
  };
  //UseEffect for the data changing according to adding the data
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vehicle")
      .then((response) => {
        // console.log(response.data.allVehicle);
        setData(response.data.data);
        console.log("data set");
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error("Status Code:", error.response.status);
          console.error("Response Data:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error setting up the request:", error.message);
        }
      });
  }, []);
  console.log(data);

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>

      <div style={tableStyle}>
        <div style={headerstyle}>
          <Header />
        </div>
        <VehicleMasterTable data={data} />
      </div>
    </div>
  );
};

export default LocationMaster;
