import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import avatar from "../../utils/Avatar.png";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light"
        style={{
          marginTop: "3%",
          marginBottom: "3%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fff ",
          justifyContent: "space-between",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <form className="container-fluid" style={{ width: "90%", margin: "0" }}>
          <div className="input-group" style={{ position: "relative" }}>
            <div>
              <SearchIcon />
            </div>
            <div>
              <input
                className="form-control"
                placeholder="Search( Ctrl + / )"
                // aria-label="Username"
                aria-describedby="basic-addon1"
                style={{
                  paddingLeft: "10px",
                  resize: "none",
                  border: "none",
                  borderRadius: "5px",
                }}
              ></input>
            </div>
          </div>
        </form>
        <LanguageIcon />
        <NotificationsNoneIcon />
        <Avatar alt="Remy Sharp" src={avatar} />
      </nav>
    </div>
  );
};

export default Header;
