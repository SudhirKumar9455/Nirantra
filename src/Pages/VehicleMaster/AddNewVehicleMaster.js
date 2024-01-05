import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import DatePicker from "react-datepicker";
import { v4 as uuidv4 } from "uuid";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const VehicleForm = () => {
  const generateRandom4DigitNumber = () => {
    return `VEC${Math.floor(Math.random() * 900) + 101}`;
  };

  // const history = useHistory();
  const [errors, setErrors] = useState({}); // State to hold validation errors

  // Validation function to check if required fields are not empty
  const validateForm = () => {
    const newErrors = {};

    // Check if required fields are empty
    // if (!vehicleData.vehicleID.trim()) {
    //   newErrors.vehicleID = "Vehicle ID is required";
    // }

    // if (!vehicleData.vehicleNumber.trim()) {
    //   newErrors.vehicleNumber = "Vehicle Number is required";
    // }

    // if (!vehicleData.vehicleType.trim()) {
    //   newErrors.vehicleType = "Vehicle Type is required";
    // }

    // Add more validations as needed

    // Set validation errors
    setErrors(newErrors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate1, setSelectedDate1] = useState("");
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setVehicleData({
      ...vehicleData,
      lastService: formatDate(date),
    });
  };

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
    setVehicleData({
      ...vehicleData,
      vehiclePOC: formatDate(date),
    });
  };
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, index) => currentYear - index);

  const [vehicleData, setVehicleData] = useState({
    vehicleID: generateRandom4DigitNumber(),
    vehicleNumber: "",
    vehicleType: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    lastService: selectedDate,
    vehiclePOC: selectedDate1,
    vehicleEffeciency: "",
    vehicleCapacity: "",
    fuelType: "",
  });

  const handleInputChange = (event) => {
    console.log("alert");
    const { name, value } = event.target;
    setVehicleData({
      ...vehicleData,
      [name]:
        name === "lastService" || name === "vehiclePOC"
          ? formatDate(value)
          : value,
    });
  };

  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      console.log(vehicleData);
      // Handle form submission if the form is valid
      axios
        .post("http://localhost:5000/api/addvehicle", vehicleData)
        .then((res) => {
          console.log(res);
          // Redirect to the dashboard page
          window.history.back();
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    }
    // const resetVehicleData = () =>
    //   setVehicleData(
    //     Object.fromEntries(Object.keys(vehicleData).map((key) => [key, ""]))
    //   );
    // resetVehicleData();
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ width: "70%", padding: "10px", marginLeft: "3%" }}>
        <Header />
        <Container component="main" maxWidth="100%">
          <Typography variant="h4">
            Vehicle Information Form
          </Typography>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "10px" }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <label htmlFor="col1">Vehicle ID</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="col1"
                    name="vehicleID"
                    onChange={handleInputChange}
                    placeholder="1122"
                    value={vehicleData.vehicleID}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col2">Vehicle Number</label>
                  <TextField
                    variant="outlined"
                    placeholder="2244"
                    fullWidth
                    id="col2"
                    name="vehicleNumber"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <label htmlFor="col2">Vehicle Type</label>
                    <Select
                      label="Type"
                      fullWidth
                      id="col3"
                      name="vehicleType"
                      onChange={handleInputChange}
                    >
                      <MenuItem value="HCV">HCV</MenuItem>
                      <MenuItem value="LCV">LCV</MenuItem>
                      <MenuItem value="MCV">MCV</MenuItem>
                      <MenuItem value="SCV">SCV</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col4">Make</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="102"
                    id="col4"
                    name="vehicleMake"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col5">Model</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="2233"
                    id="col5"
                    name="vehicleModel"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <label htmlFor="col6">Year</label>
                    <Select
                      placeholder="Year"
                      label="Year"
                      fullWidth
                      id="col6"
                      name="vehicleYear"
                      onChange={handleInputChange}
                    >
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <Typography>LAST Service</Typography>
                  <DatePicker
                    selected={selectedDate1}
                    value={selectedDate1}
                    onChange={handleDateChange1}
                    dateFormat="dd-MM-yyyy"
                    customInput={
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="col7"
                        name="lastService"
                        placeholder="DD-MM-YYYY"
                      />
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col8">Fuel Type</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="col8"
                    name="fuelType"
                    onChange={handleInputChange}
                    placeholder="2244"
                  />
                </Grid>
                <Grid item xs={4} sx={{width:'100%'}}>
                  <Typography>POC Date</Typography>
                  <DatePicker
                    selected={selectedDate}
                    value={selectedDate}
                    onChange={handleDateChange}
                    name="vehiclePOC"
                    dateFormat="dd-MM-yyyy"
                    customInput={
                      <TextField
                      // style={{width:'100%'}}
                        variant="outlined"
                        // fullWidth
                        id="col7"
                        placeholder="DD-MM-YYYY"
                      />
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col8">Fuel Effeciency km/lit</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="1210"
                    id="col9"
                    name="vehicleEffeciency"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col9">Load Capacity(ton)</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="1021"
                    id="col9"
                    name="vehicleCapacity"
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <div style={{ textAlign: "center" }}>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    width: "280px",
                    padding: "7px 45px 7px 45px",
                    height: "40px",
                    borderRadius: "5px",
                    textAlign: "center",
                    marginTop: "5%",
                  }}
                  onClick={handleSubmit} // Use onClick instead of type="submit"
                >
                  <Typography variant="h5">Submit</Typography>
                </Button>
              </div>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default VehicleForm;
