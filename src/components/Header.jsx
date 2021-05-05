import React from "react";
import Logo from "../assets/logo_transparent.png";

const Header = () => {
  return (
    <div>
      <img
        style={{
          width: "13rem",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={Logo}
        alt="logo"
      />
    </div>
  );
};

export default Header;
