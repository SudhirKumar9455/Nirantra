// src/CO2Calculator.js
import React from "react";
import { Grid, Typography, Paper, TextField, Button } from "@mui/material";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";

const CO2Calculator = () => {
  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const tableStyle = {
    width: "70%",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={tableStyle}>
        <Header />
        <div>
          <div>
            <Typography variant="h5">Emission Calculator</Typography>
          </div>
          <div>
            <Paper
              elevation={3}
              style={{
                padding: 20,
                height: "50%",
                width: "60%",
              }}
            >
              <form style={{display:'flex'}} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {/* Row 1 */}
                  <Grid item xs={6}>
                    <label>Vehicle type</label>
                    <TextField
                      fullWidth
                      label="102"
                      variant="outlined"
                      // Add necessary props or event handlers
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Fuel type</label>
                    <TextField
                      fullWidth
                      label="224"
                      variant="outlined"
                      // Add necessary props or event handlers
                    />
                  </Grid>
                  {/* Row 2 */}
                  <Grid item xs={6}>
                    <label>Vehicle Age</label>
                    <TextField
                      fullWidth
                      label="224"
                      variant="outlined"
                      // Add necessary props or event handlers
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <label>Source</label>
                    <TextField
                      fullWidth
                      label="2244"
                      variant="outlined"
                      // Add necessary props or event handlers
                    />
                  </Grid>
                  {/* Textfield 5 */}
                  <Grid item xs={6}>
                    <label>Destination</label>
                    <TextField
                      fullWidth
                      label="224"
                      variant="outlined"
                      // Add necessary props or event handlers
                    />
                  </Grid>
                  {/* Submit Button */}
                  <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Button
                      type="submit"
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        fontWeight: "600",
                        height: "53px",
                        width: "288px",
                      }}
                    >
                      Calculate Emission
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CO2Calculator;
