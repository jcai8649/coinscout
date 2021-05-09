import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import Logo from "../assets/logo_transparent.png";

const Header = () => {
  return (
    <div className="d-flex">
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
      <a
        href="https://github.com/jcai8649/coinscout"
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineGithub
          style={{
            width: "25px",
            height: "25px",
          }}
          className="text-white flex-end mt-3"
        />
      </a>
    </div>
  );
};

export default Header;
