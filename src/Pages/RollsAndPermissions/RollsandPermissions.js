import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';
import RollsAndPermissionTable from './RollPermissionsTable';


const RollsandPermissions = () => {
  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const tableStyle = {
    width: "70%",
  };

  const Headerstyle={
    width:"100%",
  }

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={tableStyle}>
        <Header/>
        <RollsAndPermissionTable/>
      </div>
    </div>
  );
};

export default RollsandPermissions;
