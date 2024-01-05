import React from "react";
import {
  Typography,
  Paper,
  IconButton,
  TextField,
  Button,
  Grid,
  Avatar,
} from "@mui/material";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import DescriptionIcon from "@mui/icons-material/Description";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const SupportPage = () => {
  const goBack = () => {
    // Add logic to navigate back to the previous page
    window.history.back();
  };
  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const PageStyle = {
    width: "70%",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log("Form submitted!");
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={sidebarStyle}>
          <Sidebar />
        </div>
        <div style={PageStyle}>
          <Header />
          <div
            style={{
              display: "flex",
              backgroundColor: "#fff",
              flexDirection: "column",
            }}
          >
            <div>
              <Typography variant="h4">Support Tickets</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "row", border:'1px solid black' }}>
              <div>
              {/* Left Side of the Page where I am getting the 4 coloumns of the Page */}
                <Grid>
                  <Paper style={{ border: "1px solid black" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <b>Title Ticket</b>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <div>
                          <DescriptionIcon />
                        </div>
                        <div>
                          <ExpandCircleDownIcon />
                        </div>
                      </div>
                    </div>
                    <div>Category</div>
                    <div>
                      Lörem ipsum hypopabande sagigong sapott kontraskapet.
                      <br />
                      Lörem ipsumhypopabande sagigong....See more{" "}
                    </div>
                  </Paper>
                </Grid>
                <Grid>
                  <Paper style={{ border: "1px solid black" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <b>Title Ticket</b>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                          <DescriptionIcon />
                        </div>
                        <div>
                          <ExpandCircleDownIcon />
                        </div>
                      </div>
                    </div>
                    <div>Category</div>
                    <div>
                      Lörem ipsum hypopabande sagigong sapott kontraskapet.
                      <br />
                      Lörem ipsumhypopabande sagigong....See more{" "}
                    </div>
                  </Paper>
                </Grid>
                <Grid>
                  <Paper style={{ border: "1px solid black" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <b>Title Ticket</b>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                          <DescriptionIcon />
                        </div>
                        <div>
                          <ExpandCircleDownIcon />
                        </div>
                      </div>
                    </div>
                    <div>Category</div>
                    <div>
                      Lörem ipsum hypopabande sagigong sapott kontraskapet.
                      <br />
                      Lörem ipsumhypopabande sagigong....See more{" "}
                    </div>
                  </Paper>
                </Grid>
                <Grid>
                  <Paper style={{ border: "1px solid black" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <b>Title Ticket</b>
                      </div>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <div>
                          <DescriptionIcon />
                        </div>
                        <div>
                          <ExpandCircleDownIcon />
                        </div>
                      </div>
                    </div>
                    <div>Category</div>
                    <div>
                      Lörem ipsum hypopabande sagigong sapott kontraskapet.
                      <br />
                      Lörem ipsumhypopabande sagigong....See more{" "}
                    </div>
                  </Paper>
                </Grid>
              </div>
              <div>
                <Grid container spacing={2} xs={12} md={12} style={{border:'5px solid red'}}>
                  <Grid item xs={12} md={12} style={{border:'2px solid yellow'}}>
                    <Paper elevation={3}>
                      <form onSubmit={handleSubmit}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div>
                            <div>
                              <Avatar />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <div style={{display:'flex', flexDirection:'column'}}>
                                <div>
                                  <label>Ticket Title</label>
                                </div>
                                <div>
                                  <TextField
                                    label="Number"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                  />
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
                              >
                                <div>
                                  <label>Category</label>
                                </div>
                                <div>
                                  <TextField
                                    label="Other"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div>
                                <label>Description</label>
                              </div>
                              <div>
                                <TextField
                                  label="Type Here..."
                                  fullWidth
                                  margin="normal"
                                  variant="outlined"
                                />
                              </div>
                            </div>
                            <div>
                              <label>Upload</label>
                              <TextField
                                label="Upload"
                                fullWidth
                                margin='dense'
                                multiline
                                style={{border:'2px dotted black'}}
                                rows={4}
                                variant="outlined"
                              />
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <Button
                                type="submit"
                                style={{
                                  color: "#fff",
                                  backgroundColor: "black",
                                }}
                              >
                                Submit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
