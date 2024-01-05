import React, { useState, useEffect } from "react";
import "./Trip.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TripTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Function to generate random data
    const getRandomData = () => ({
      id:
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100) +
        Math.floor(Math.random() * 100),
      vehicleNumber: "DL" + Math.floor(Math.random() * 10000),
      driverId: Math.floor(Math.random() * 1000),
      tripId: Math.floor(Math.random() * 100),
      source: ["Delhi"][Math.floor(Math.random() * 1)],
      destination: ["Mumbai"][Math.floor(Math.random() * 1)],
      timeForStoppage: Math.floor(Math.random() * 50) + 10,
      distanceTravelled: Math.floor(Math.random() * 200) + 50,
      typeOfFuel: ["Gasoline", "Diesel", "Electric"][
        Math.floor(Math.random() * 3)
      ],
      assumedEfficiency: Math.floor(Math.random() * 20) + 5,
      stopTime: Math.floor(Math.random() * 10) + 1,
      fuelConsumed: Math.floor(Math.random() * 30) + 5,
      cargoLoad: Math.floor(Math.random() * 1000),
      emissionPerTon: Math.random() * 10,
      totalEmissionPerTrip: Math.random() * 100,
    });

    // Function to populate the table with random data
    const populateTable = () => {
      const newData = [];
      for (let i = 0; i < 7; i++) {
        newData.push(getRandomData());
      }
      setTableData(newData);
    };

    // Initial population of the table
    populateTable();
  }, []);

  return (
    <div>
      <div
        className="table-heading"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "left", fontWeight: "600" }}
        >
          <h4>Trips</h4>
        </div>
        <div>
          <Link to="/AddNewTrip" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <button
                style={{
                  width: "160px",
                  height: "39px",
                  padding: "0", // Corrected padding value
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  border: "none",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0.1, 0.2)",
                }}
              >
                <Typography>+ Add New Location</Typography>
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="table-container">
        <div className="scrollable-table">
          <table>
            <thead className="thead">
              <tr>
                <th>Date</th>
                <th>Vehicle Number</th>
                <th>Driver ID</th>
                <th>Trip Id</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Time for Stoppage</th>
                <th>Distance Travelled</th>
                <th>Type of Fuel</th>
                <th>Assumed Efficiency</th>
                <th>Stop Time/Idle Time</th>
                <th>Fuel Consumed</th>
                <th>Cargo Load on Truck</th>
                <th>Emission Per Ton</th>
                <th>Total Emission Per Trip</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr
                  key={data.id}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td>{data.id}</td>
                  <td>{data.vehicleNumber}</td>
                  <td>{data.driverId}</td>
                  <td>{data.tripId}</td>
                  <td>{data.source}</td>
                  <td>{data.destination}</td>
                  <td>{data.timeForStoppage}</td>
                  <td>{data.distanceTravelled}</td>
                  <td>{data.typeOfFuel}</td>
                  <td>{data.assumedEfficiency}</td>
                  <td>{data.stopTime}</td>
                  <td>{data.fuelConsumed}</td>
                  <td>{data.cargoLoad}</td>
                  <td>{data.emissionPerTon}</td>
                  <td>{data.totalEmissionPerTrip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TripTable;
