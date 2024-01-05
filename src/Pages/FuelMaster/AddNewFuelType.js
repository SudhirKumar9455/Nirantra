import React, { useState, useEffect } from "react";
import { Navigate, useHistory, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
// import Dropdown from "react-bootstrap/Dropdown";
import saveFormData from "./saveFormData";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
// import { v4 as uuidv4 } from "uuid";
const measurementData = [
  "Gallon",
  "Litres",
  "Imperial Gallon",
  "Barrel",
  "Cubic Meters",
  "Cubic Foot",
  "Kiloliters",
  "Megajoule(MG)",
  "Watt",
];

const AddNewFuelType = () => {
  // const history = useHistory();
  const Navigate = useNavigate();
  const generateRandom4DigitNumber = () => {
    return `FUL${Math.floor(Math.random() * 900) + 101}`;
  };

  const [selectedMeasurement, setSelectedMeasurement] = useState("");

  const handleMeasurementSelect = (measurement) => {
    setSelectedMeasurement(measurement);
    setMeasurementType(measurement);
  };

  const [fuelId, setFuelId] = useState(generateRandom4DigitNumber());
  const [fuelType, setFuelType] = useState("");
  const [measurementType, setMeasurementType] = useState("");

  const handleClickSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // handleSubmit(e); // Call the handleSubmit function
    console.log(fuelId);
    console.log(fuelType);
    console.log(measurementType);

    saveFormData({
      fuelID: fuelId,
      fuelType: fuelType,
      Measurement: measurementType,
    });
    // alert("Data saved");
    // window.history.back();
    Navigate("/fuelmaster");
  };

  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const formStyle = {
    // border: "1px solid black",
    padding: "10px",
    borderRadius: "10px",
    width: "684px",
    margin: "none",
    height: "313px",
    backgroundColor: "white",
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={{ width: "70%" }}>
        <Header />
        <h2>Fuel Master</h2>
        <div style={formStyle}>
          <form>
            <div style={{ display: "flex", flexDirection:'row' }}>
              {/* <div style={{ marginRight: "10px" }}>
                <label htmlFor="fuelId">Fuel ID</label>
                <input
                  type="text"
                  id="fuelId"
                  value={fuelId}
                  onChange={(e) => setFuelId(e.target.value)}
                  required
                />
              </div> */}
              <div style={{ width:'100%' }}>
                <InputLabel id="fuelID">Fuel ID</InputLabel>
                <TextField
                sx={{width:'300px', height:'39px'}}
                  id="fuelId"
                  // label="Fuel ID"
                  value={fuelId}
                  onChange={(e) => setFuelId(e.target.value)}
                  required
                />
              </div>
              {/* <div style={{ marginRight: "10px" }}>
                <label htmlFor="fuelType">Fuel Type</label>
                <select
                  id="fuelType"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  required
                >
                  <option value="Select">Select Fuel Type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                  <option value="hydrogen">Hydrogen</option>
                  <option value="electric">Electric</option>
                </select>
              </div> */}
              {/* <div style={{ marginRight: "40px" }}> */}
              {/* <label htmlFor="fuelType">Fuel Type</label>
              <FormControl style={{ width: "250px" }}>
                <InputLabel id="fuelType-label">Fuel Type</InputLabel>
                <Select
                  labelId="fuelType-label"
                  id="fuelType"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  required
                >
                  <MenuItem value="Select">Select Fuel Type</MenuItem>
                  <MenuItem value="petrol">Petrol</MenuItem>
                  <MenuItem value="diesel">Diesel</MenuItem>
                  <MenuItem value="hydrogen">Hydrogen</MenuItem>
                  <MenuItem value="electric">Electric</MenuItem>
                </Select>
              </FormControl> */}
              <div style={{width:'100%'}}>
                <InputLabel id="fuelType">Fuel Type</InputLabel>
                <FormControl style={{ width: "300px", height:'39px' }}>
                  {/* <InputLabel id="fuelType-label">Fuel Type</InputLabel> */}
                  <Select
                    labelId="fuelType-label"
                    id="fuelType"
                    value={fuelType}
                    onChange={(e) => setFuelType(e.target.value)}
                    required
                  >
                    <MenuItem value="">Select Fuel Type</MenuItem>
                    <MenuItem value="petrol">Petrol</MenuItem>
                    <MenuItem value="diesel">Diesel</MenuItem>
                    <MenuItem value="hydrogen">Hydrogen</MenuItem>
                    <MenuItem value="electric">Electric</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {/* </div> */}
            </div>
            {/* <div style={{ display: "flex" }}>
              <div style={{ marginTop: "25px", marginBottom: "25px" }}>
                <label htmlFor="measurementType">Measurement Type</label>
                <br />
                <select
                  value={selectedMeasurement}
                  onChange={(e) => handleMeasurementSelect(e.target.value)}
                >
                  <option value="">Measurement</option>
                  {measurementData.map((measurement, index) => (
                    <option key={index} value={measurement}>
                      {measurement}
                    </option>
                  ))}
                </select>
              </div>
            </div> */}
            {/* <div style={{ display: "flex" }}>
              {/* <div style={{ marginRight: "10px" }}> */}
            {/* <label htmlFor="measurementType">Measurement Type</label>
            <FormControl style={{ width: "250px" }}>
              <InputLabel id="measurementType-label">
                <Typography>Measurement Type</Typography>
              </InputLabel>
              <Select
                labelId="measurementType-label"
                id="measurementType"
                value={selectedMeasurement}
                onChange={(e) => handleMeasurementSelect(e.target.value)}
                required
              >
                <MenuItem value="">Select Measurement Type</MenuItem>
                {measurementData.map((measurement, index) => (
                  <MenuItem key={index} value={measurement}>
                    {measurement}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <div style={{justifyContent:'left', marginTop:'10%'}}>
              {/* <label htmlFor="measurementType">Measurement Type</label> */}
              <label htmlFor="fuelType">Measurement Type</label><br/>
              <FormControl style={{ width: "300px", height:'39px' }}>
                
                <Select
                  // labelId="measurementType-label"
                  id="measurementType"
                  value={selectedMeasurement}
                  onChange={(e) => handleMeasurementSelect(e.target.value)}
                  required
                >
                  <MenuItem value="">Select Measurement Type</MenuItem>
                  {measurementData.map((measurement, index) => (
                    <MenuItem key={index} value={measurement}>
                      {measurement}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            {/* </div> */}
            {/* </div> */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "7%",
              }}
            >
              <button
                style={{
                  color: "white",
                  backgroundColor: "black",
                  width: "280px",
                  padding: "7px 30px 7px 30px",
                  height: "40px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
                // type="submit"
                onClick={handleClickSubmit} // Add onClick handler here
              >
                <h5>
                  <b>Submit</b>
                </h5>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewFuelType;
