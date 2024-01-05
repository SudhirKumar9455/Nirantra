// // import React from 'react'

// // const AddNewTrip = () => {
// //   return (
// //     <div>
// //         New Trip
// //     </div>
// //   )
// // }

// // export default AddNewTrip
// import React, { useState } from 'react';

// const AddNewTrip = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     date: '',
//     vehicleNumber: '',
//     driverId: '',
//     // ... add more fields based on your thead structure
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform validation or additional logic before submitting
//     onSubmit(formData);
//     // Optionally, you can reset the form after submission
//     setFormData({
//       date: '',
//       vehicleNumber: '',
//       driverId: '',
//       // ... reset other fields
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Date:</label>
//         <input type="text" name="date" value={formData.date} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Vehicle Number:</label>
//         <input type="text" name="vehicleNumber" value={formData.vehicleNumber} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Driver ID:</label>
//         <input type="text" name="driverId" value={formData.driverId} onChange={handleChange} />
//       </div>
//       {/* ... add more input fields based on your thead structure */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AddNewTrip;
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

const AddNewTrip = () => {
  const [dragging, setDragging] = useState(false);
  const generateRandom4DigitNumber = () => {
    return `TRIP${Math.floor(Math.random() * 900) + 101}`;
  };
  const [errors, setErrors] = useState({}); // State to hold validation errors
  const validateForm = () => {
    const newErrors = {};
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDate1, setSelectedDate1] = useState("");
  const [selectedDate2, setSelectedDate2] = useState("");
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
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
    setVehicleData({
      ...vehicleData,
      vehiclePOC: formatDate(date),
    });
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    handleImageUpload(file);
  };
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, index) => currentYear - index);

  const [vehicleData, setVehicleData] = useState({
    vehicleID: generateRandom4DigitNumber(),
    Date: selectedDate,
    selectDriver: "",
    tripstartdate: "",
    vehicleSource: "",
    vehicleDestination: "",
    DistanceTravelled: "",
    StartOdoReading: "",
    EndOdoReading: "",
    vehicleCapacity: "",
    vehicleEffeciency: "",
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
  const handleImageUpload = (file) => {
    // Handle image upload logic here
    // You can use FileReader to read the file and send it to the server

    const reader = new FileReader();

    reader.onloadend = () => {
      // Do something with the uploaded image data
      // For example, update the state with the image data
      setVehicleData({
        ...vehicleData,
        image: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ width: "70%", padding: "10px", marginLeft: "3%" }}>
        <Header />
        <Container component="main" maxWidth="100%">
          <Typography component="h1" variant="h5">
            Trips
          </Typography>
          <Paper elevation={3} style={{ padding: "20px", marginTop: "10px" }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <label htmlFor="col1">Trip ID</label>
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
                  <label>Date Entry</label>
                  <br />
                  <DatePicker
                    selected={selectedDate}
                    value={selectedDate}
                    onChange={handleDateChange}
                    customInput={
                      <TextField
                        variant="outlined"
                        placeholder="2244"
                        fullWidth
                        id="col2"
                        name="Date"
                        // placeholder="DD-MM-YYYY"
                      />
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <label htmlFor="col2">Select Driver</label>
                    <Select
                      label="Type"
                      fullWidth
                      id="col3"
                      name="selectDriver"
                      onChange={handleInputChange}
                    >
                      <MenuItem value="Ram">Ram</MenuItem>
                      <MenuItem value="Shyam">Shyam</MenuItem>
                      <MenuItem value="Ghanshyam">Ghanshyam</MenuItem>
                      <MenuItem value="Hari">Hari</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col4">Trip Start Date</label>
                  <DatePicker
                    onChange={handleDateChange1}
                    selected={selectedDate1}
                    value={selectedDate1}
                    customInput={
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="102"
                        id="col4"
                        name="tripstartdate"
                      />
                    }
                  />
                </Grid>
                <Grid item xs={4}>
                  <label htmlFor="col5">Source</label>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="2233"
                    id="col5"
                    name="vehicleSource"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth variant="outlined">
                    <label htmlFor="col2">Trip End Date</label>
                    <DatePicker
                      onChange={handleDateChange2}
                      selected={selectedDate2}
                      value={selectedDate2}
                      customInput={
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="2233"
                          id="col5"
                          name="tripenddate"
                          // onChange={handleInputChange}
                        />
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  Destination
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="2233"
                    id="col5"
                    name="vehicleDestination"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  Distance Travelled
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="2233"
                    id="col5"
                    name="DistanceTravelled"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  Enter Start Odometer Reading
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="2233"
                    id="col5"
                    name="StartOdoReading"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  Trip End Odometer Reading
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="2233"
                    id="col5"
                    name="EndOdoReading"
                    onChange={handleInputChange}
                  />
                </Grid>
                {/* For Uploading the Image */}
                <Grid item xs={6}>
                  <Paper
                    elevation={3}
                    style={{ padding: "20px", marginTop: "10px" }}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    className={dragging ? "dragging" : ""}
                  >
                    <form>
                      {/* ... other form elements */}
                      <Grid item xs={12}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <label>
                            Drag and Drop or{" "}
                            <div>
                              <Button sx={{backgroundColor:'black',color:'wheat'}}>Browse</Button>
                            </div>
                          </label>
                          <input
                            type="file"
                            name="image"
                            onChange={handleInputChange}
                            accept="image/*"
                            style={{ display: "none" }}
                          />
                          <div
                            className="drop-area"
                            onClick={() =>
                              document
                                .querySelector('input[type="file"]')
                                .click()
                            }
                          >
                            {vehicleData.image ? (
                              <img
                                src={vehicleData.image}
                                alt="Uploaded"
                                style={{ maxWidth: "100%", maxHeight: "100%" }}
                              />
                            ) : (
                              <p>Image Uploaded</p>
                            )}
                          </div>
                        </div>
                      </Grid>
                      {/* ... other form elements */}
                    </form>
                  </Paper>
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
                <Grid item xs={4}>
                  <label htmlFor="col9">Fuel Consumed in Ltr</label>
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
                  <label htmlFor="col9">Load On Truck</label>
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
                  <Typography variant="h6">Submit</Typography>
                </Button>
              </div>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default AddNewTrip;
