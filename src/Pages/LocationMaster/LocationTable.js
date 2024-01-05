// import { Typography } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const LocationTable = ({data}) => {
//   if (!Array.isArray(data)) {
//     // If data is not an array, you can handle it accordingly
//     console.error("Data is not an array:", data);
//     return null; // or display an error message
//   }
//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//         }}
//       >
//         <div>
//           <h2>Location Master</h2>
//         </div>
//         <Link to="/AddNewLocationMaster">
//           <button
//             style={{
//               width: "160px",
//               height: "39px",
//               padding: "none",
//               color: "black",
//               backgroundColor: "white",
//               borderRadius: "5px",
//               border: "none",
//               boxShadow: "0px 4px 8px rgba(0, 0, 0.1, 0.2)",
//             }}
//           >
//             <Typography>+ Add New Location</Typography>
//           </button>
//         </Link>
//       </div>
//       <table className="styled-table">
//         <thead>
//           <tr>
//             <th scope="col">Location Id</th>
//             <th scope="col">Location Name</th>
//             <th scope="col">Latitude</th>
//             <th scope="col">Longitude</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((location,index) => (
//             <tr
//               key={location.id}
//               className={index % 2 === 0 ? "even-row" : "odd-row"}
//             >
//               <th scope="row">{location.locationID}</th>
//               <td>{location.locationName}</td>
//               <td>{location.longitude}</td>
//               <td>{location.latitude}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default LocationTable;
import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LocationTable = ({ data }) => {
  if (!Array.isArray(data)) {
    // If data is not an array, you can handle it accordingly
    // console.error("Data is not an array:", data);
    return null; // or display an error message
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="table-heading">
          <h2>Location Master</h2>
        </div>
        <Link to="/AddNewLocationMaster">
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
        </Link>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th scope="col">Location Id</th>
            <th scope="col">Location Name</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
          </tr>
        </thead>
        <tbody>
          {data.map((location, index) => (
            <tr
              key={location.id}
              className={index % 2 === 0 ? "even-row" : "odd-row"}
            >
              <th scope="row">{location.locationID}</th>
              <td>{location.locationName}</td>
              <td>{location.longitude}</td>
              <td>{location.latitude}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationTable;
