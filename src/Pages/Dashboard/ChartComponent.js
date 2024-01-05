import React, { useState } from "react";
import HCV from "../../utils/Group 33.png";
import LCV from "../../utils/Group 33 (1).png";
import MCV from "../../utils/Group 33 (2).png";
import EV from "../../utils/EV.png";
import Dropdown from "react-bootstrap/Dropdown";

import {
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ComposedChart,
  RadialBarChart,
  RadialBar,
  Label,
} from "recharts";
import CircularProgressBar from "../../Components/ProgressBar/Progressbar";
// import { Tooltip } from "chart.js";
const ChartComponent = () => {
  const data = [
    {
      name: "Page A1",
      thismonth: 4000,
      lastmonth: 2400,
    },
    {
      name: "Page B1",
      thismonth: 3000,
      lastmonth: 1398,
    },
    {
      name: "Page C1",
      thismonth: 2000,
      lastmonth: 9800,
    },
    {
      name: "Page D1",
      thismonth: 2780,
      lastmonth: 3908,
    },
    {
      name: "Page E1",
      thismonth: 1890,
      pv: 4800,
    },
  ];
  const data2 = [
    {
      name: "Petrol",
      petrol: 4000,
      Fuel: 240,
      amt: 2400,
    },
    {
      name: "Diesel",
      petrol: 3000,
      Fuel: 139,
      amt: 2210,
    },
    {
      name: "CNG",
      petrol: 2000,
      Fuel: 980,
      amt: 2290,
    },
    {
      name: "Electric",
      petrol: 2780,
      Fuel: 390,
      amt: 2000,
    },
    {
      name: "Other",
      petrol: 1890,
      Fuel: 480,
      amt: 2181,
    },
  ];
  const data3 = [
    {
      name: "G",
      x: 6.67,
      fill: "black",
    },
    {
      name: "F",
      x: 2.63,
      fill: "white",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(""); // State to keep track of the selected option

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey); // Update the state with the selected option
  };
  return (
    <div>
      <text>
        <h3>
          <b>Dashbaord Overview</b>
        </h3>
      </text>
      <text className="Heading">
        <h7>
          Using the matrix and analytics of your organisation's audit.
        </h7>
      </text>
      <div className="container">
        <div className="topcontainer">
          {/* Container for the 1st Container in the first Row */}
          <div className="topcontainer1">
            <div className="topcontainer1row1">
              <div>Current Emission</div>
              <div>
                <h2>
                  <b>600</b>
                </h2>
              </div>
            </div>
            <div className="topcontainer1row2">
              <div>
                <RadialBarChart
                  width={170}
                  height={170}
                  data={data3}
                  innerRadius="100%"
                  outerRadius="50%"
                  startAngle={90}
                  endAngle={360}
                >
                  <RadialBar
                    minAngle={30}
                    dataKey="x"
                    clockWise={false}
                    background={{ fill: "white" }}
                  />
                  <Label
                    value="60%"
                    position="center"
                    color="black"
                    content={
                      <text
                        style={{ color: "black" }}
                        x={85}
                        y={85}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        60%
                      </text>
                    }
                  />
                </RadialBarChart>
                {/* <CircularProgressBar/> */}
              </div>
            </div>
            <div className="topcontainer1row3">
              <div
                className="EmissionContainer"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="EmissionDiv">
                  <div>Emission Limit</div>
                  <div>
                    <h2>
                      <b>10000</b>
                    </h2>
                  </div>
                </div>
                <div className="Measurementdropdown">
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle variant="outlined" id="dropdown-basic">
                      Measurement
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Gallon">Gallon</Dropdown.Item>
                      <Dropdown.Item eventKey="Litres">Litres</Dropdown.Item>
                      <Dropdown.Item eventKey="Imperial Gallon">
                        Imperial Gallon
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Barrel">Barrel</Dropdown.Item>
                      <Dropdown.Item eventKey="Cubic Meters">
                        Cubic Meters
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Cubic Foot">
                        Cubic Foot
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Kiloliters">
                        Kiloliters
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Megajoule(MG)">
                        Megajoule(MG)
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Gigajoule(GJ)">
                        Gigajoule(GJ)
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {selectedOption && <p>Selected Option: {selectedOption}</p>}
                </div>
              </div>
            </div>
          </div>
          {/* Container for the 2nd Container in the first Row */}
          <div className="topcontainer2">
            <div className="smalltopcontainer2col1">
              <div className="smalltopcontainer2col1row1">
                <div>All trips</div>
                <div>
                  <h2>500</h2>
                </div>
              </div>
              <div className="smalltopcontainer2col1row2">See Details</div>
            </div>
            <div className="smalltopcontainer2col1row2">
              <div className="smalltopcontainer2col1row1">
                <div>Pending</div>
                <div>
                  <h7>
                    <b>120</b>
                  </h7>
                </div>
              </div>
              <div className="smalltopcontainer2col1row2">See Details</div>
            </div>
            <div className="smalltopcontainer2col3">
              <div className="smalltopcontainer2col1row1">
                <div>Approved</div>
                <div>
                  <b>300</b>
                </div>
              </div>
              <div className="smalltopcontainer2col1row2">See Details</div>
            </div>
            <div className="smalltopcontainer2col4">
              <div className="smalltopcontainer2col1row1">
                <div>In Review</div>
                <div>
                  <b>100</b>
                </div>
              </div>
              <div className="smalltopcontainer2col1row2">See Details</div>
            </div>
          </div>
          {/* Container for the 3rd Container in the first Row */}
          <div className="topcontainer3">
            <div className="container1">
              <div
                className="topcontainerSmaller1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={HCV} />
                </div>
                <div>HCV</div>
                <div>25</div>
              </div>
              <div
                className="topcontainerSmaller2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={LCV} />
                </div>
                <div>LCV</div>
                <div>25</div>
              </div>
            </div>
            <div className="container2">
              <div
                className="topcontainerSmaller3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={MCV} />
                </div>
                <div>MCV</div>
                <div>25</div>
              </div>
              <div
                className="topcontainerSmaller4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <img src={EV} />
                </div>
                <div>EV</div>
                <div>25</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomcontainer">
          <div className="bottomcontainer1">
            <div>Emission vs km run This Month vs Last Month</div>
            <BarChart width={500} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="thismonth" fill="#3854C8" />
              <Bar dataKey="lastmonth" fill="#BE7F34" />
            </BarChart>
          </div>
          <div className="bottomcontainer2">
            <div>Emission by fuel Category</div>
            <ComposedChart width={500} height={250} data={data2}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />

              <Bar dataKey="Fuel" fill="#BE7F34" />
            </ComposedChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
