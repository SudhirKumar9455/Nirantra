import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import ChartComponent from "./ChartComponent";


const Dashboard = () => {
  const sidebarStyle = {
    width: "20%",
  };
  const headerStyle ={
    width:'70%',
  }
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={headerStyle}>
        <Header/>
        <ChartComponent/>
      </div>
    </div>
  );
};

export default Dashboard;
